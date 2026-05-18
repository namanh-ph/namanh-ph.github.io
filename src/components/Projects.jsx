import { Fragment, useEffect, useMemo, useState } from 'react'
import { FiGithub, FiChevronDown } from 'react-icons/fi'
import projectsData from '../data/projectsData'

const ALL = 'All'

function useGridCols() {
  const [cols, setCols] = useState(4)
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= 1024) setCols(4)
      else if (w >= 640) setCols(2)
      else setCols(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return cols
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)
  const [expanded, setExpanded] = useState(null)
  const cols = useGridCols()

  const categories = useMemo(() => {
    const seen = new Set()
    const ordered = []
    projectsData.forEach((p) => {
      if (!seen.has(p.category)) {
        seen.add(p.category)
        ordered.push(p.category)
      }
    })
    return [ALL, ...ordered]
  }, [])

  const visible = useMemo(() => {
    if (filter === ALL) return projectsData
    return projectsData.filter((p) => p.category === filter)
  }, [filter])

  const expandedIndex = useMemo(
    () => visible.findIndex((p) => p.title === expanded),
    [visible, expanded],
  )
  const expandedRow = expandedIndex >= 0 ? Math.floor(expandedIndex / cols) : -1
  const expandedProject =
    expandedIndex >= 0 ? visible[expandedIndex] : null

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-[#ece5d8]"
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Projects
        </h2>

        <div className="mt-6 flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setFilter(cat)
                  setExpanded(null)
                }}
                className={
                  'px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ' +
                  (isActive
                    ? 'bg-orange-600 text-white border border-orange-600'
                    : 'bg-white text-slate-700 border border-[#ece5d8] hover:border-orange-500 hover:text-orange-700')
                }
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((project, i) => {
            const idx = projectsData.indexOf(project) + 1
            const isOpen = expandedProject?.title === project.title
            const rowOfThis = Math.floor(i / cols)
            const isLastInRow =
              (i + 1) % cols === 0 || i === visible.length - 1
            const showPanelAfterThis =
              isLastInRow && expandedRow === rowOfThis && expandedProject

            return (
              <Fragment key={project.title}>
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isOpen ? null : project.title)
                  }
                  aria-expanded={isOpen}
                  className={
                    'grid-card text-left flex flex-col rounded-2xl border bg-white p-5 min-h-[17.5rem] transition-colors ' +
                    (isOpen
                      ? 'border-orange-400 shadow-[0_8px_32px_-20px_rgba(234,88,12,0.45)]'
                      : 'border-[#ece5d8]')
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold text-orange-600 tabular-nums">
                      {String(idx).padStart(2, '0')}
                    </span>
                    <span
                      className={
                        'inline-flex items-center gap-1 text-xs font-medium transition-colors ' +
                        (isOpen ? 'text-orange-600' : 'text-slate-500')
                      }
                    >
                      {isOpen ? 'Close' : 'Click for details'}
                      <FiChevronDown
                        size={14}
                        className={
                          'transition-transform duration-200 ' +
                          (isOpen ? 'rotate-180' : '')
                        }
                      />
                    </span>
                  </div>

                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500 line-clamp-1">
                    {project.domain}
                  </p>
                  <h3 className="mt-1 text-[17px] font-semibold text-slate-900 leading-snug text-balance">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-4 flex-1">
                    {project.shortDescription}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, k) => (
                      <span
                        key={k}
                        className="px-2 py-0.5 text-[12px] rounded bg-[#fbf7f1] border border-[#ece5d8] text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-[12px] rounded bg-[#fbf7f1] border border-[#ece5d8] text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </button>

                {showPanelAfterThis && (
                  <div className="expand-enter col-span-full rounded-2xl border border-orange-400 bg-white shadow-[0_8px_32px_-20px_rgba(234,88,12,0.45)] px-6 md:px-8 py-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-600">
                          {expandedProject.category} · {expandedProject.domain}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-slate-900">
                          {expandedProject.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpanded(null)}
                        aria-label="Collapse"
                        className="shrink-0 text-slate-500 hover:text-slate-900 text-2xl leading-none"
                      >
                        ×
                      </button>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Overview
                          </h4>
                          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                            {expandedProject.overview}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Features
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            {expandedProject.features.map((feature, k) => (
                              <li
                                key={k}
                                className="pl-3 border-l-2 border-orange-300"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Stack
                          </h4>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {expandedProject.technologies.map((tech, k) => (
                              <span
                                key={k}
                                className="px-2.5 py-1 text-xs rounded-md bg-[#fbf7f1] border border-[#ece5d8] text-slate-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={expandedProject.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
                        >
                          <FiGithub size={16} /> View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
