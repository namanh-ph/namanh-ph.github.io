import experienceData from '../data/experienceData'

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="scroll-mt-24 border-b border-[#ece5d8]"
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Work Experience
        </h2>

        <ol className="mt-6 space-y-4">
          {experienceData.map((item, index) => (
            <li
              key={index}
              className="grid-card rounded-md border border-[#ece5d8] bg-white"
            >
              <div className="grid md:grid-cols-[300px_1fr]">
                <aside className="p-6 md:p-7 md:border-r md:border-[#ece5d8]">
                  {item.project && (
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-600">
                      Project: {item.project}
                    </p>
                  )}
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-600">{item.organisation}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 tabular-nums">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-orange-500" />
                    {item.period}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#ece5d8]">
                    <h4 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Tools &amp; Skills
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tools.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-md bg-[#fbf7f1] border border-[#ece5d8] text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="p-6 md:p-7">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {item.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="pl-3 border-l-2 border-[#ece5d8] hover:border-orange-400 transition-colors"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Outcomes
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {item.outcomes.map((o, i) => (
                        <li
                          key={i}
                          className="pl-3 border-l-2 border-orange-300"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
