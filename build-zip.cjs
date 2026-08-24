const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create a standards-compliant, all-inclusive ZIP file with Unix 0644 file permissions
function createZip(distDir, outputFile) {
  const files = [];

  function walk(dir) {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else {
        const relPath = path.relative(distDir, fullPath).replace(/\\/g, '/');
        // Exclude duplicate hero-video.mp4 if hero-background.mp4 is already present
        if (relPath === 'hero-video.mp4') continue;
        files.push({ fullPath, relPath, size: stat.size });
      }
    }
  }

  walk(distDir);

  // Ensure index.html and .htaccess are first in the archive
  files.sort((a, b) => {
    if (a.relPath === 'index.html') return -1;
    if (b.relPath === 'index.html') return 1;
    if (a.relPath === '.htaccess') return -1;
    if (b.relPath === '.htaccess') return 1;
    return a.relPath.localeCompare(b.relPath);
  });

  const zipBuffers = [];
  const centralDirectoryHeaders = [];
  let offset = 0;

  for (const file of files) {
    const data = fs.readFileSync(file.fullPath);
    // Don't waste CPU compressing MP4 files that are already compressed
    const isVideo = file.relPath.endsWith('.mp4');
    let finalData = data;
    let method = 0;

    if (!isVideo) {
      const compressed = zlib.deflateRawSync(data);
      if (compressed.length < data.length) {
        finalData = compressed;
        method = 8;
      }
    }

    const nameBuf = Buffer.from(file.relPath, 'utf8');
    const crc = crc32(data);

    // Local file header (30 bytes + filename)
    const localHeader = Buffer.alloc(30 + nameBuf.length);
    localHeader.writeUInt32LE(0x04034b50, 0); // signature
    localHeader.writeUInt16LE(20, 4); // version needed to extract (2.0)
    localHeader.writeUInt16LE(0, 6); // general purpose bit flag
    localHeader.writeUInt16LE(method, 8); // compression method
    localHeader.writeUInt16LE(0, 10); // file last mod time
    localHeader.writeUInt16LE(0, 12); // file last mod date
    localHeader.writeUInt32LE(crc, 14); // crc-32
    localHeader.writeUInt32LE(finalData.length, 18); // compressed size
    localHeader.writeUInt32LE(data.length, 22); // uncompressed size
    localHeader.writeUInt16LE(nameBuf.length, 26); // file name length
    localHeader.writeUInt16LE(0, 28); // extra field length
    nameBuf.copy(localHeader, 30);

    // Central directory header (46 bytes + filename)
    const cdHeader = Buffer.alloc(46 + nameBuf.length);
    cdHeader.writeUInt32LE(0x02014b50, 0); // central file header signature
    // Version made by: lower byte = 20 (zip 2.0), upper byte = 3 (UNIX system)
    cdHeader.writeUInt16LE((3 << 8) | 20, 4); 
    cdHeader.writeUInt16LE(20, 6); // version needed to extract
    cdHeader.writeUInt16LE(0, 8); // general purpose bit flag
    cdHeader.writeUInt16LE(method, 10); // compression method
    cdHeader.writeUInt16LE(0, 12); // file last mod time
    cdHeader.writeUInt16LE(0, 14); // file last mod date
    cdHeader.writeUInt32LE(crc, 16); // crc-32
    cdHeader.writeUInt32LE(finalData.length, 20); // compressed size
    cdHeader.writeUInt32LE(data.length, 24); // uncompressed size
    cdHeader.writeUInt16LE(nameBuf.length, 28); // file name length
    cdHeader.writeUInt16LE(0, 30); // extra field length
    cdHeader.writeUInt16LE(0, 32); // file comment length
    cdHeader.writeUInt16LE(0, 34); // disk number start
    cdHeader.writeUInt16LE(0, 36); // internal file attributes
    // External file attributes: Unix mode 0100644 (regular file, rw-r--r--) shifted by 16 bits = 0x81A40000
    cdHeader.writeUInt32LE(0x81A40000, 38); 
    cdHeader.writeUInt32LE(offset, 42); // relative offset of local header
    nameBuf.copy(cdHeader, 46);

    zipBuffers.push(localHeader, finalData);
    centralDirectoryHeaders.push(cdHeader);

    offset += localHeader.length + finalData.length;
  }

  const cdOffset = offset;
  let cdSize = 0;
  for (const h of centralDirectoryHeaders) {
    zipBuffers.push(h);
    cdSize += h.length;
  }

  // End of central directory record (22 bytes)
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4); // disk num
  eocd.writeUInt16LE(0, 6); // start disk
  eocd.writeUInt16LE(files.length, 8); // total entries on this disk
  eocd.writeUInt16LE(files.length, 10); // total entries
  eocd.writeUInt32LE(cdSize, 12); // size of central directory
  eocd.writeUInt32LE(cdOffset, 16); // offset of start of central directory
  eocd.writeUInt16LE(0, 20); // zip file comment length

  zipBuffers.push(eocd);

  fs.writeFileSync(outputFile, Buffer.concat(zipBuffers));
  console.log(`Created all-inclusive ${outputFile} (${files.length} files, size: ${(Buffer.concat(zipBuffers).length / (1024 * 1024)).toFixed(1)} MB) with FastStart hero-background.mp4 & UNIX permissions`);
}

// CRC32 calculation table
const table = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  table[i] = c;
}

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

const distDir = path.resolve(__dirname, 'dist');
const outLocal = path.resolve(__dirname, 'HOSTINGER_UPLOAD.zip');
const outDesktop = 'C:\\Users\\FUJITU\\Desktop\\HOSTINGER_UPLOAD.zip';

createZip(distDir, outLocal);
try {
  fs.copyFileSync(outLocal, outDesktop);
  console.log('Copied complete HOSTINGER_UPLOAD.zip to Desktop successfully');
} catch (e) {
  console.error('Desktop copy skipped:', e.message);
}
