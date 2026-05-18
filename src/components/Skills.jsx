import skillsData from '../data/skillsData'

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-white border-b border-[#ece5d8]"
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Skills
        </h2>

        <div className="mt-8 divide-y-2 divide-[#ece5d8] border-y-2 border-[#ece5d8]">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-6 md:items-start py-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600 md:pt-1.5">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-white text-slate-700 border border-[#ece5d8] hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50/40 transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
