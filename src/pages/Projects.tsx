import { Layout } from "@/components/Layout"
import { Link } from "@tanstack/react-router"

const projectsConfig = {
  projects: [
    {
      id: 1,
      gradient: "from-slate-100 to-gray-200",
      title: "Project One",
      link: "/projects/one",
    },
    {
      id: 2,
      gradient: "from-gray-100 to-slate-200",
      title: "Project Two",
      link: "/projects/two",
    },
    {
      id: 3,
      gradient: "from-zinc-100 to-gray-200",
      title: "Project Three",
      link: "/projects/three",
    },
    {
      id: 4,
      gradient: "from-neutral-100 to-stone-200",
      title: "Project Four",
      link: "/projects/four",
    },
    {
      id: 5,
      gradient: "from-stone-100 to-gray-200",
      title: "Project Five",
      link: "/projects/five",
    },
    {
      id: 6,
      gradient: "from-gray-50 to-slate-100",
      title: "Project Six",
      link: "/projects/six",
    },
  ],
}

const Projects = () => {
  return (
    <Layout>
      {/* Projects Grid */}
      <main className="px-6 md:px-12 py-12 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-[1200px] mx-auto">
          {projectsConfig.projects.map((project) => (
            <Link key={project.id} to={project.link} className="group cursor-pointer">
              <div className={`aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-gray-500/0 group-hover:bg-gray-500/20 transition-colors duration-300"></div>
              </div>
              <p className="text-sm font-light mt-2 text-left">{project.title}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Projects
