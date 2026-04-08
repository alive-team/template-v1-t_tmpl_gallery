import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import Index from "./pages/Index"
import Projects from "./pages/Projects"
import Archive from "./pages/Moodboard"
import ProjectOne from "./pages/ProjectOne"
import ProjectTwo from "./pages/ProjectTwo"
import ProjectThree from "./pages/ProjectThree"
import ProjectFour from "./pages/ProjectFour"
import ProjectFive from "./pages/ProjectFive"
import ProjectSix from "./pages/ProjectSix"
import NotFound from "./pages/NotFound"
import "./index.css"

const queryClient = new QueryClient()

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
})

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: Index })
const projectsRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects", component: Projects })
const archiveRoute = createRoute({ getParentRoute: () => rootRoute, path: "/archive", component: Archive })
const projectOneRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects/one", component: ProjectOne })
const projectTwoRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects/two", component: ProjectTwo })
const projectThreeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects/three", component: ProjectThree })
const projectFourRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects/four", component: ProjectFour })
const projectFiveRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects/five", component: ProjectFive })
const projectSixRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects/six", component: ProjectSix })

const routeTree = rootRoute.addChildren([
  indexRoute,
  projectsRoute,
  archiveRoute,
  projectOneRoute,
  projectTwoRoute,
  projectThreeRoute,
  projectFourRoute,
  projectFiveRoute,
  projectSixRoute,
])

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
