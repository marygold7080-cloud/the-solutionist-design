const fs = require('fs');
const path = require('path');

function makeFastStart(inputPath, outputPath) {
  console.log(`Reading ${inputPath}...`);
  const buf = fs.readFileSync(inputPath);
  
  // 1. Read ftyp atom
  const ftypSize = buf.readUInt32BE(0);
  const ftypType = buf.subarray(4, 8).toString();
  if (ftypType !== 'ftyp') {
    throw new Error('Not an MP4 file (missing ftyp at start)');
  }
  const ftypBuf = buf.subarray(0, ftypSize);
  console.log(`ftyp size: ${ftypSize}`);

  // 2. Locate moov atom at the end
  const moovMarker = Buffer.from('moov');
  const moovIdx = buf.indexOf(moovMarker);
  if (moovIdx === -1) {
    throw new Error('No moov atom found');
  }
  const moovPos = moovIdx - 4;
  const moovSize = buf.readUInt32BE(moovPos);
  console.log(`Found moov atom at ${moovPos}, size: ${moovSize}`);

  if (moovPos === ftypSize) {
    console.log('File is already FastStart (moov is already at the beginning)!');
    return;
  }

  // 3. Extract moov and mdat buffers
  const moovBuf = Buffer.from(buf.subarray(moovPos, moovPos + moovSize));
  const mdatBuf = buf.subarray(ftypSize, moovPos);
  console.log(`mdat size: ${mdatBuf.length}`);

  // 4. Adjust stco (32-bit chunk offsets) by adding moovSize
  let pos = 0;
  let stcoCount = 0;
  while ((pos = moovBuf.indexOf(Buffer.from('stco'), pos)) !== -1) {
    const entryCount = moovBuf.readUInt32BE(pos + 8);
    console.log(`Adjusting stco table at moov offset ${pos} with ${entryCount} entries...`);
    for (let i = 0; i < entryCount; i++) {
      const entryPos = pos + 12 + (i * 4);
      const currentOffset = moovBuf.readUInt32BE(entryPos);
      moovBuf.writeUInt32BE(currentOffset + moovSize, entryPos);
    }
    stcoCount++;
    pos += 4;
  }

  // 5. Adjust co64 (64-bit chunk offsets) if any
  pos = 0;
  let co64Count = 0;
  while ((pos = moovBuf.indexOf(Buffer.from('co64'), pos)) !== -1) {
    const entryCount = moovBuf.readUInt32BE(pos + 8);
    console.log(`Adjusting co64 table at moov offset ${pos} with ${entryCount} entries...`);
    for (let i = 0; i < entryCount; i++) {
      const entryPos = pos + 12 + (i * 8);
      const currentOffset = moovBuf.readBigUInt64BE(entryPos);
      moovBuf.writeBigUInt64BE(currentOffset + BigInt(moovSize), entryPos);
    }
    co64Count++;
    pos += 4;
  }

  console.log(`Updated ${stcoCount} stco tables and ${co64Count} co64 tables.`);

  // 6. Write output: ftyp + moov (with updated offsets) + mdat synchronously
  const fd = fs.openSync(outputPath, 'w');
  fs.writeSync(fd, ftypBuf);
  fs.writeSync(fd, moovBuf);
  fs.writeSync(fd, mdatBuf);
  fs.closeSync(fd);

  console.log(`Successfully wrote FastStart video to ${outputPath}`);
}

const input = path.resolve(__dirname, 'public/hero-background.mp4');
const tempOutput = path.resolve(__dirname, 'public/hero-background-faststart.mp4');

makeFastStart(input, tempOutput);

// Replace original with faststart version
fs.copyFileSync(tempOutput, input);
fs.copyFileSync(tempOutput, path.resolve(__dirname, 'dist/hero-background.mp4'));
fs.copyFileSync(tempOutput, 'C:\\Users\\FUJITU\\Desktop\\hero-background.mp4');
fs.unlinkSync(tempOutput);

console.log('FastStart hero-background.mp4 ready and copied to Desktop!');
