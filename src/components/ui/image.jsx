import * as React from "react";
import { cn } from "@/lib/utils";
import { getOptimizedImageUrl } from "./image-helpers";

export const Image = React.forwardRef(
  ({ src, alt = "", className, width, height, glow = false, fill = false, ...props }, ref) => {
    const [loaded, setLoaded] = React.useState(false);
    const optimizedSrc = getOptimizedImageUrl(src, { width: width || 1200 });

    return (
      <div
        className={cn(
          "relative overflow-hidden bg-slate-900/60",
          glow && "shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]",
          fill ? "w-full h-full" : "",
          className
        )}
      >
        <img
          ref={ref}
          src={optimizedSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-md"
          )}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = "Image";

export default Image;
