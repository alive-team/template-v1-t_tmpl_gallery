import { Layout } from "@/components/Layout"

const archiveItems = [
  // Row 1
  { id: 1, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[3/4]", date: "10 October 2025", title: "Minimal Structure" },
  { id: 2, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "12 October 2025", title: "Light Study" },
  { id: 3, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[3/4]", date: "15 October 2025", title: "Material Exploration" },
  { id: 4, gradient: "from-neutral-100 to-stone-200", ratio: "aspect-[4/3]", date: "18 October 2025", title: "Spatial Form" },
  { id: 5, gradient: "from-stone-100 to-gray-200", ratio: "aspect-square", date: "20 October 2025", title: "Textural Research" },
  { id: 6, quote: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"", ratio: "aspect-[3/4]", title: "Quote One", date: "22 October 2025" },
  { id: 7, gradient: "from-slate-50 to-zinc-100", ratio: "aspect-[4/3]", date: "25 October 2025", title: "Surface Detail" },
  { id: 8, gradient: "from-zinc-50 to-gray-100", ratio: "aspect-square", date: "28 October 2025", title: "Composition Study" },
  { id: 9, gradient: "from-neutral-50 to-slate-100", ratio: "aspect-[4/3]", date: "30 October 2025", title: "Shadow Work" },

  // Row 2
  { id: 10, gradient: "from-stone-50 to-gray-100", ratio: "aspect-square", date: "02 November 2025", title: "Form Language" },
  { id: 11, quote: "\"Sed do eiusmod tempor incididunt ut labore et dolore.\"", ratio: "aspect-[4/3]", title: "Quote Two", date: "05 November 2025" },
  { id: 12, gradient: "from-slate-100 to-neutral-200", ratio: "aspect-[3/4]", date: "08 November 2025", title: "Gradient Series" },
  { id: 13, gradient: "from-zinc-100 to-slate-200", ratio: "aspect-square", date: "10 November 2025", title: "Tone Research" },
  { id: 14, gradient: "from-neutral-100 to-gray-200", ratio: "aspect-[4/3]", date: "12 November 2025", title: "Layer Study" },
  { id: 15, gradient: "from-stone-100 to-slate-200", ratio: "aspect-[3/4]", date: "15 November 2025", title: "Depth Exploration" },
  { id: 16, gradient: "from-gray-50 to-zinc-100", ratio: "aspect-square", date: "18 November 2025", title: "Subtle Variation" },
  { id: 17, gradient: "from-slate-50 to-gray-100", ratio: "aspect-[4/3]", date: "20 November 2025", title: "Quiet Composition" },
  { id: 18, gradient: "from-zinc-50 to-slate-100", ratio: "aspect-[3/4]", date: "22 November 2025", title: "Muted Palette" },

  // Row 3
  { id: 19, gradient: "from-neutral-50 to-gray-100", ratio: "aspect-square", date: "25 November 2025", title: "Soft Transition" },
  { id: 20, gradient: "from-stone-50 to-slate-100", ratio: "aspect-[4/3]", date: "28 November 2025", title: "Gentle Form" },
  { id: 21, quote: "\"Ut labore et dolore magna aliqua enim ad minim veniam.\"", ratio: "aspect-[3/4]", title: "Quote Three", date: "30 November 2025" },
  { id: 22, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "02 December 2025", title: "Balanced Light" },
  { id: 23, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[4/3]", date: "05 December 2025", title: "Simple Form" },
  { id: 24, gradient: "from-neutral-100 to-stone-200", ratio: "aspect-[3/4]", date: "08 December 2025", title: "Calm Structure" },
  { id: 25, gradient: "from-stone-100 to-gray-200", ratio: "aspect-square", date: "10 December 2025", title: "Essential Shape" },
  { id: 26, gradient: "from-gray-50 to-slate-100", ratio: "aspect-[4/3]", date: "12 December 2025", title: "Pure Volume" },
  { id: 27, gradient: "from-slate-50 to-zinc-100", ratio: "aspect-[3/4]", date: "15 December 2025", title: "Clean Edge" },

  // Row 4
  { id: 28, gradient: "from-zinc-50 to-gray-100", ratio: "aspect-square", date: "18 December 2025", title: "Precise Detail" },
  { id: 29, gradient: "from-neutral-50 to-slate-100", ratio: "aspect-[4/3]", date: "20 December 2025", title: "Refined Study" },
  { id: 30, gradient: "from-stone-50 to-gray-100", ratio: "aspect-[3/4]", date: "22 December 2025", title: "Thoughtful Space" },
  { id: 31, gradient: "from-gray-100 to-zinc-200", ratio: "aspect-square", date: "25 December 2025", title: "Careful Balance" },
  { id: 32, gradient: "from-slate-100 to-neutral-200", ratio: "aspect-[4/3]", date: "28 December 2025", title: "Measured Tone" },
  { id: 33, gradient: "from-zinc-100 to-slate-200", ratio: "aspect-[3/4]", date: "30 December 2025", title: "Modest Gesture" },
  { id: 34, gradient: "from-neutral-100 to-gray-200", ratio: "aspect-square", date: "02 January 2026", title: "Quiet Presence" },
  { id: 35, gradient: "from-stone-100 to-slate-200", ratio: "aspect-[4/3]", date: "05 January 2026", title: "Understated Form" },
  { id: 36, gradient: "from-gray-50 to-zinc-100", ratio: "aspect-[3/4]", date: "08 January 2026", title: "Restrained Detail" },

  // Row 5
  { id: 37, quote: "\"Quis nostrud exercitation ullamco laboris nisi ut aliquip.\"", ratio: "aspect-square", title: "Quote Four", date: "10 January 2026" },
  { id: 38, gradient: "from-zinc-50 to-slate-100", ratio: "aspect-[4/3]", date: "12 January 2026", title: "Subtle Rhythm" },
  { id: 39, gradient: "from-neutral-50 to-gray-100", ratio: "aspect-[3/4]", date: "15 January 2026", title: "Soft Geometry" },
  { id: 40, gradient: "from-stone-50 to-slate-100", ratio: "aspect-square", date: "18 January 2026", title: "Minimal Gesture" },
  { id: 41, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[4/3]", date: "20 January 2026", title: "Light Material" },
  { id: 42, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[3/4]", date: "22 January 2026", title: "Gray Study" },
  { id: 43, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-square", date: "25 January 2026", title: "Tonal Range" },
  { id: 44, gradient: "from-neutral-100 to-stone-200", ratio: "aspect-[4/3]", date: "28 January 2026", title: "Neutral Space" },
  { id: 45, gradient: "from-stone-100 to-gray-200", ratio: "aspect-[3/4]", date: "30 January 2026", title: "Simple Plane" },

  // Row 6
  { id: 46, gradient: "from-gray-50 to-slate-100", ratio: "aspect-square", date: "02 February 2026", title: "Clear Form" },
  { id: 47, gradient: "from-slate-50 to-zinc-100", ratio: "aspect-[4/3]", date: "05 February 2026", title: "Basic Shape" },
  { id: 48, gradient: "from-zinc-50 to-gray-100", ratio: "aspect-[3/4]", date: "08 February 2026", title: "Essential Line" },
  { id: 49, gradient: "from-neutral-50 to-slate-100", ratio: "aspect-square", date: "10 February 2026", title: "Direct Approach" },
  { id: 50, quote: "\"Duis aute irure dolor in reprehenderit in voluptate velit.\"", ratio: "aspect-[4/3]", title: "Quote Five", date: "12 February 2026" },
  { id: 51, gradient: "from-gray-100 to-zinc-200", ratio: "aspect-[3/4]", date: "15 February 2026", title: "Functional Form" },
  { id: 52, gradient: "from-slate-100 to-neutral-200", ratio: "aspect-square", date: "18 February 2026", title: "Practical Detail" },
  { id: 53, gradient: "from-zinc-100 to-slate-200", ratio: "aspect-[4/3]", date: "20 February 2026", title: "Useful Structure" },
  { id: 54, gradient: "from-neutral-100 to-gray-200", ratio: "aspect-[3/4]", date: "22 February 2026", title: "Purpose Driven" },

  // Row 7
  { id: 55, gradient: "from-stone-100 to-slate-200", ratio: "aspect-square", date: "25 February 2026", title: "Efficient Design" },
  { id: 56, gradient: "from-gray-50 to-zinc-100", ratio: "aspect-[4/3]", date: "28 February 2026", title: "Rational Choice" },
  { id: 57, gradient: "from-slate-50 to-gray-100", ratio: "aspect-[3/4]", date: "02 March 2026", title: "Logical System" },
  { id: 58, gradient: "from-zinc-50 to-slate-100", ratio: "aspect-square", date: "05 March 2026", title: "Ordered Space" },
  { id: 59, gradient: "from-neutral-50 to-gray-100", ratio: "aspect-[4/3]", date: "08 March 2026", title: "Systematic Study" },
  { id: 60, gradient: "from-stone-50 to-slate-100", ratio: "aspect-[3/4]", date: "10 March 2026", title: "Methodical Work" },
  { id: 61, gradient: "from-slate-100 to-gray-200", ratio: "aspect-square", date: "12 March 2026", title: "Considered Move" },
  { id: 62, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[4/3]", date: "15 March 2026", title: "Deliberate Action" },
  { id: 63, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[3/4]", date: "18 March 2026", title: "Careful Thought" },

  // Row 8
  { id: 64, gradient: "from-neutral-100 to-stone-200", ratio: "aspect-square", date: "20 March 2026", title: "Patient Process" },
  { id: 65, gradient: "from-stone-100 to-gray-200", ratio: "aspect-[4/3]", date: "22 March 2026", title: "Steady Progress" },
  { id: 66, gradient: "from-gray-50 to-slate-100", ratio: "aspect-[3/4]", date: "25 March 2026", title: "Gradual Change" },
  { id: 67, gradient: "from-slate-50 to-zinc-100", ratio: "aspect-square", date: "28 March 2026", title: "Slow Evolution" },
  { id: 68, gradient: "from-zinc-50 to-gray-100", ratio: "aspect-[4/3]", date: "30 March 2026", title: "Natural Growth" },
  { id: 69, gradient: "from-neutral-50 to-slate-100", ratio: "aspect-[3/4]", date: "02 April 2026", title: "Organic Development" },
  { id: 70, gradient: "from-stone-50 to-gray-100", ratio: "aspect-square", date: "05 April 2026", title: "Flowing Form" },
  { id: 71, gradient: "from-gray-100 to-zinc-200", ratio: "aspect-[4/3]", date: "08 April 2026", title: "Fluid Motion" },
  { id: 72, gradient: "from-slate-100 to-neutral-200", ratio: "aspect-[3/4]", date: "10 April 2026", title: "Dynamic Balance" },
]

const Archive = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-20 pb-12 px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-9 gap-3">
            {archiveItems.map((item) => (
              <div key={item.id} className="space-y-2">
                {item.quote ? (
                  <div className="cursor-pointer hover:opacity-95 transition-opacity">
                    <p className="text-[13px] lg:text-[15px] font-medium text-gray-500 text-left leading-relaxed">
                      {item.quote}
                    </p>
                  </div>
                ) : (
                  <div className={`${item.ratio} bg-gradient-to-br ${item.gradient} cursor-pointer hover:opacity-95 transition-opacity`}></div>
                )}
                <div className="space-y-0.5">
                  <p className="text-[10px] lg:text-[12px] font-light opacity-85" style={{ lineHeight: '1.45' }}>
                    {item.title}
                  </p>
                  {item.date && (
                    <p className="text-[10px] lg:text-[12px] font-light opacity-85" style={{ lineHeight: '1.45' }}>
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Archive
