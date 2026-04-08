import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  src: string
  alt: string
  caption?: string
}

interface GalleryCarouselProps {
  slides: Slide[]
  autoplayInterval?: number
  showCaptions?: boolean
}

export const GalleryCarousel = ({
  slides,
  autoplayInterval = 5000,
  showCaptions = true,
}: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + slides.length) % slides.length)
  }, [slides.length])

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  // Autoplay
  useEffect(() => {
    if (!isHovered && autoplayInterval > 0) {
      const interval = setInterval(goToNext, autoplayInterval)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isHovered, autoplayInterval, goToNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext()
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious()
    }
  }

  const gradients = [
    "bg-gradient-to-br from-[hsl(210,20%,85%)] to-[hsl(210,20%,70%)]",
    "bg-gradient-to-br from-[hsl(180,15%,85%)] to-[hsl(180,15%,70%)]",
    "bg-gradient-to-br from-[hsl(30,20%,85%)] to-[hsl(30,20%,70%)]",
    "bg-gradient-to-br from-[hsl(0,10%,85%)] to-[hsl(0,10%,70%)]",
    "bg-gradient-to-br from-[hsl(150,15%,85%)] to-[hsl(150,15%,70%)]",
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:w-[80%] mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image gallery"
    >
      {/* Main image container */}
      <div className="relative aspect-[3/4] lg:aspect-[16/9] overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`min-w-full h-full ${gradients[index % gradients.length]}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={index !== currentIndex}
            >
            </div>
          ))}
        </div>

        {/* Arrow buttons - visible on hover, hidden on mobile */}
        <button
          onClick={goToPrevious}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
