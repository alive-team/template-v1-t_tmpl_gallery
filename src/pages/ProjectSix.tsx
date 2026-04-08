import { Layout } from "@/components/Layout"

const ProjectSix = () => {
  return (
    <Layout>
      <div className="min-h-screen relative">
        {/* Fixed Text - Bottom Left */}
        <div className="hidden md:block fixed bottom-6 left-6 w-[260px] z-10">
          <div className="space-y-6">
            <h1 className="text-[14px] font-light tracking-tight opacity-85" style={{ lineHeight: '1.45' }}>
              Project Six
            </h1>
            <div className="space-y-3 text-[14px] font-light opacity-85" style={{ lineHeight: '1.45' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Text - Top */}
        <div className="md:hidden pt-20 px-6 pb-8">
          <div className="space-y-6">
            <h1 className="text-[14px] font-light tracking-tight opacity-85" style={{ lineHeight: '1.45' }}>
              Project Six
            </h1>
            <div className="space-y-3 text-[14px] font-light opacity-85" style={{ lineHeight: '1.45' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Images - Right Half */}
        <div className="md:ml-[50%] px-6 md:px-0 md:pr-6 pt-0 md:pt-20 pb-6 space-y-[6px]">
          <div className="aspect-[3/2] bg-gradient-to-br from-gray-50 to-slate-100 cursor-pointer hover:opacity-95 transition-opacity"></div>

          <div className="grid grid-cols-2 gap-[6px]">
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-50 to-zinc-100 cursor-pointer hover:opacity-95 transition-opacity"></div>
            <div className="aspect-[4/5] bg-gradient-to-br from-zinc-50 to-gray-100 cursor-pointer hover:opacity-95 transition-opacity"></div>
          </div>

          <div className="aspect-[21/9] bg-gradient-to-br from-neutral-50 to-slate-100 cursor-pointer hover:opacity-95 transition-opacity"></div>

          <div className="aspect-square bg-gradient-to-br from-stone-50 to-gray-100 cursor-pointer hover:opacity-95 transition-opacity"></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectSix
