import { Box, CardMedia } from '@mui/material';
import React, { useState, useRef } from 'react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ src, alt }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setCursorPosition({ x: xPercent, y: yPercent });
    setMagnifierPosition({ x, y }); // relative to image container
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'none',
      }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        ref={imgRef}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {showMagnifier && (
        <Box
          sx={{
            position: 'absolute',
            pointerEvents: 'none',
            width: '450px',
            height: '300px',
            border: '3px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '10%',
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '700% 700%',
            backgroundPosition: `${cursorPosition.x}% ${cursorPosition.y}%`,
            transform: 'translate(-20%, -20%)',
            left: `${magnifierPosition.x}px`,
            top: `${magnifierPosition.y}px`,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            zIndex: 10,
          }}
        />
      )}
    </Box>
  );
};

export default ImageMagnifier;
