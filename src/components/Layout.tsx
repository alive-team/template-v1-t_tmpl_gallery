import { useState, ReactNode } from "react"
import { Link, useLocation } from "@tanstack/react-router"

const siteConfig = {
  title: "Name",
}

const contactConfig = {
  email: "you@domain.com",
  phone: "+45 12 34 56 78",
  instagram: "@yourhandle",
}

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [showInfo, setShowInfo] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background">
      {!showInfo ? (
        /* Header */
        <header className="fixed top-0 left-0 right-0 z-50 bg-background">
          <div className="flex items-center justify-between py-2 px-6">
            {/* Logo / Name */}
            <div>
              <Link to="/">
                <h1 className="text-base font-medium tracking-tight">
                  {siteConfig.title}
                </h1>
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <Link
                to="/projects"
                className="text-base font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                to="/archive"
                className="text-base font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                Archive
              </Link>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="text-base font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                Info
              </button>
            </div>
          </div>
        </header>
      ) : (
        /* Info Overlay */
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="bg-background py-2 px-6 pb-8 md:pb-16">
            <div className="flex items-start justify-between mb-8 md:mb-0">
              {/* Logo / Name */}
              <div>
                <Link to="/">
                  <h1 className="text-base font-medium tracking-tight">
                    {siteConfig.title}
                  </h1>
                </Link>
              </div>
              {/* Close button */}
              <button
                onClick={() => setShowInfo(false)}
                className="text-base font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                Close
              </button>
            </div>

            {/* Info Content */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-center max-w-4xl mx-auto md:absolute md:top-2 md:left-1/2 md:-translate-x-1/2">
              <div className="text-left">
                <p className="text-sm font-light max-w-md leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>
              <div className="text-left space-y-2 text-sm">
                <div>
                  <a href={`mailto:${contactConfig.email}`} className="hover:text-muted-foreground transition-colors">
                    {contactConfig.email}
                  </a>
                </div>
                <div>
                  <a href={`https://instagram.com/${contactConfig.instagram.replace('@', '')}`} className="hover:text-muted-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                    {contactConfig.instagram}
                  </a>
                </div>
                <div>
                  <a href={`tel:${contactConfig.phone}`} className="hover:text-muted-foreground transition-colors">
                    {contactConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {children}
    </div>
  )
}
