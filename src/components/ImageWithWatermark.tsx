import React from 'react';

interface ImageWithWatermarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  watermarkSrc?: string;
  watermarkSize?: number;
  watermarkOpacity?: number;
}

const ImageWithWatermark: React.FC<ImageWithWatermarkProps> = ({
  src,
  alt,
  className = '',
  watermarkSrc = '/akina-logo.png',
  watermarkSize = 24,
  watermarkOpacity = 0.7,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        {...props}
      />
      <img
        src={watermarkSrc}
        alt="Akina Logo Watermark"
        className="absolute bottom-2 right-2 pointer-events-none"
        style={{
          width: `${watermarkSize}px`,
          height: `${watermarkSize}px`,
          opacity: watermarkOpacity,
        }}
      />
    </div>
  );
};

export default ImageWithWatermark;
