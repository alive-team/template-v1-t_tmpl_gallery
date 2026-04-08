import React, { useEffect, useState, useRef } from 'react'

type Slide = {
  src: string
  alt: string
  caption?: string
}

type MovingCarouselProps = {
  slides: Slide[]
}

export const MovingCarousel: React.FC<MovingCarouselProps> = ({ slides }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startScrollPosition, setStartScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const animate = () => {
      if (!isDragging && trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2
        setScrollPosition((prev) => {
          const next = prev + 1
          return next >= trackWidth ? 0 : next
        })
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isDragging])

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX
    setStartX(clientX)
    setStartScrollPosition(scrollPosition)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return

    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX
    const delta = startX - clientX
    const newPosition = startScrollPosition + delta
    const trackWidth = trackRef.current.scrollWidth / 2

    if (newPosition >= trackWidth) {
      setStartScrollPosition(0)
      setStartX(clientX)
      setScrollPosition(0)
    } else if (newPosition < 0) {
      setStartScrollPosition(trackWidth + newPosition)
      setStartX(clientX)
      setScrollPosition(trackWidth + newPosition)
    } else {
      setScrollPosition(newPosition)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: isMobile ? '60vh' : 'clamp(300px, 80vh, 80vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        lineHeight: 0,
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          width: 'max-content',
          gap: 0,
          alignItems: 'center',
          transform: `translateX(-${scrollPosition}px)`,
          lineHeight: 0,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={`original-${index}`}
            src={slide.src}
            alt={slide.alt}
            draggable={false}
            style={{
              height: isMobile ? '55vh' : '80vh',
              width: 'auto',
              maxWidth: isMobile ? '100vw' : '78vw',
              objectFit: 'cover',
              flexShrink: 0,
              display: 'block',
            }}
          />
        ))}
        {slides.map((slide, index) => (
          <img
            key={`duplicate-${index}`}
            src={slide.src}
            alt={slide.alt}
            draggable={false}
            style={{
              height: isMobile ? '55vh' : '80vh',
              width: 'auto',
              maxWidth: isMobile ? '100vw' : '78vw',
              objectFit: 'cover',
              flexShrink: 0,
              display: 'block',
            }}
          />
        ))}
      </div>
    </div>
  )
}