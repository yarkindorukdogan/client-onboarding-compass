
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  alt: string;
}

export function Image({ className, alt, ...props }: ImageProps) {
  return (
    <img 
      className={cn("rounded-md object-cover", className)} 
      alt={alt} 
      {...props} 
    />
  );
}
