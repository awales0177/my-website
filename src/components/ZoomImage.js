import React, { useState, useRef, useEffect } from 'react';
import styles from './ZoomImage.module.css';

const ZoomImage = ({ src, alt, width = '100%', height = 'auto' }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    if (!isZoomed) {
      setIsZoomed(true);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsZoomed(false);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Calculate bounds
      const rect = imageRef.current.getBoundingClientRect();
      const scaledWidth = rect.width * scale;
      const scaledHeight = rect.height * scale;
      
      // Limit dragging to image bounds
      const maxX = (scaledWidth - rect.width) / 2;
      const maxY = (scaledHeight - rect.height) / 2;
      
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY))
      });
    } else if (!isZoomed) {
      // Update magnifier position
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only show magnifier if mouse is over the image
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setShowMagnifier(true);
        setMagnifierPosition({ x, y });
      } else {
        setShowMagnifier(false);
      }
    }
  };

  const handleMouseDown = (e) => {
    if (!isZoomed) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (!isZoomed) return;

    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(0.5, scale + delta), 3);
    
    // Calculate mouse position relative to image
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate new position to zoom towards mouse
    const newX = position.x - (x * (newScale - scale)) / newScale;
    const newY = position.y - (y * (newScale - scale)) / newScale;
    
    setScale(newScale);
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    if (isZoomed) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isZoomed, isDragging, scale, position]);

  return (
    <div 
      className={styles.imageContainer} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowMagnifier(false)}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${styles.image} ${isZoomed ? styles.zoomed : ''}`}
        onClick={handleClick}
        style={{ width, height }}
      />
      {showMagnifier && !isZoomed && (
        <div 
          className={styles.magnifier}
          style={{
            left: magnifierPosition.x,
            top: magnifierPosition.y,
          }}
        >
          <div 
            className={styles.magnifierContent}
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: `-${magnifierPosition.x - 50}px -${magnifierPosition.y - 50}px`,
              backgroundSize: `${imageRef.current?.width || 0}px ${imageRef.current?.height || 0}px`,
            }}
          />
        </div>
      )}
      {isZoomed && (
        <div 
          className={styles.overlay} 
          onClick={handleOverlayClick}
          onMouseDown={handleMouseDown}
        >
          <img
            src={src}
            alt={alt}
            className={styles.zoomedImage}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ZoomImage; 