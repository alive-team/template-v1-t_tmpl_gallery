import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];          // Array of image URLs to display
  autoPlayInterval?: number; // Milliseconds between automatic slides (0 = manual)
  showThumbnails?: boolean;  // Whether to show thumbnail navigation
  initialSlide?: number;     // Starting slide index
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 0,
  showThumbnails = true,
  initialSlide = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const [isPlaying, setIsPlaying] = useState(autoPlayInterval > 0);

  // Navigation Methods
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Toggle Play/Pause
  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Auto-play Logic
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && autoPlayInterval > 0) {
      intervalId = setInterval(nextImage, autoPlayInterval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, autoPlayInterval, nextImage]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch(event.key) {
        case 'ArrowRight': nextImage(); break;
        case 'ArrowLeft': prevImage(); break;
        case ' ': togglePlayPause(); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage, togglePlayPause]);

  return (
    <div
      className="image-carousel relative w-full max-w-xl mx-auto"
      aria-roledescription="carousel"
      aria-label="Image Carousel"
    >
      {/* Main Image Display */}
      <div className="carousel-main relative overflow-hidden rounded-lg shadow-md">
        {/* Previous Button */}
        <button
          onClick={prevImage}
          aria-label="Previous Image"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronLeft />
        </button>

        {/* Current Image */}
        <img
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          className="w-full h-64 md:h-96 object-cover transition-opacity duration-300"
          aria-current="true"
        />

        {/* Next Button */}
        <button
          onClick={nextImage}
          aria-label="Next Image"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronRight />
        </button>

        {/* Play/Pause Button */}
        {autoPlayInterval > 0 && (
          <button
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
            className="absolute bottom-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="carousel-thumbnails flex justify-center mt-4 space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-16 h-16 object-cover cursor-pointer transition-all duration-300
                ${index === currentIndex
                  ? 'border-2 border-blue-500 opacity-100'
                  : 'opacity-50 hover:opacity-75'}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Markdown-friendly utility component
export const MarkdownCarouselWrapper: React.FC<{ markdown: string }> = ({ markdown }) => {
  // Extract image URLs using regex
  const imageRegex = /!\[([^\]]*)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)/g;
  const images: string[] = [];
  let match;

  while ((match = imageRegex.exec(markdown)) !== null) {
    images.push(match[2]);
  }

  return images.length > 0 ? (
    <ImageCarousel
      images={images}
      showThumbnails={images.length > 1}
      autoPlayInterval={5000}
    />
  ) : null;
};