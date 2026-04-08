import { useState } from "react"
import { Layout } from "@/components/Layout"
import { MovingCarousel } from "@/components/MovingCarousel"

// ===== CONFIGURATION SCHEMA =====
// Edit this section to customize your gallery showcase

const galleryConfig = {
  showCaptions: true,
  slides: [
    {
      src: "/_images/t/template1.alive.best/o/73c190f1a12aebee/v/orig.webp",
      alt: "Gallery image 1",
    },
    {
      src: "/_images/t/template1.alive.best/o/d126b0f16e76319f/v/orig.webp",
      alt: "Gallery image 2",
    },
    {
      src: "/_images/t/template1.alive.best/o/cab8b3aa6cc6a637/v/orig.webp",
      alt: "Gallery image 3",
    },
    {
      src: "/_images/t/template1.alive.best/o/b2f22aa3ba80441a/v/orig.webp",
      alt: "Gallery image 4",
    },
    {
      src: "/_images/t/template1.alive.best/o/7ecd992c364d141c/v/orig.webp",
      alt: "Gallery image 5",
    },
    {
      src: "/_images/t/template1.alive.best/o/54a0b7ed01b55f86/v/orig.webp",
      alt: "Gallery image 6",
    },
  ],
}

const themeConfig = {
  mode: "light" as "light" | "dark", // "light" or "dark"
}

// ===== COMPONENT =====

const Index = () => {
  const [theme] = useState(themeConfig.mode)

  return (
    <Layout>
      <div
        className={`min-h-screen flex flex-col ${
          theme === "dark" ? "dark bg-[hsl(0,0%,4%)]" : "bg-background"
        } transition-colors duration-200`}
      >
        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center px-6 pt-20">
          <div className="w-full max-w-[1440px]">
          </div>
        </main>

        {/* Carousel */}
        <MovingCarousel
          slides={galleryConfig.slides}
        />
      </div>
    </Layout>
  )
}

export default Index
