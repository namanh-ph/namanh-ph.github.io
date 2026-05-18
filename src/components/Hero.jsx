import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiArrowRight } from 'react-icons/fi'
import profile from '../data/profileData'

const focusChips = [
  'AI Engineering',
  'Data Engineering',
  'Generative AI',
  'Financial Crime / AML',
  'Portfolio Management',
  'Quantitative Risk',
  'BI & Decision Systems',
]

export default function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white border-b border-[#ece5d8]"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          {profile.displayName}
        </h1>
        <p className="mt-3 text-xl md:text-2xl font-semibold text-orange-600">
          {profile.headline}
        </p>

        <div className="mt-5 grid gap-8 md:grid-cols-3 max-w-5xl">
          <p className="md:col-span-2 text-base text-slate-700 leading-relaxed">
            {profile.about}
          </p>
          <aside className="md:border-l-2 md:border-orange-500 md:pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
              Focus
            </p>
            <ul className="mt-2 space-y-1.5 text-sm font-medium text-slate-800">
              <li>Fintech, Risk, and Insurance</li>
              <li>Data &amp; AI Engineering</li>
              <li>Research</li>
            </ul>
          </aside>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-base text-slate-600">
          <span className="inline-flex items-center gap-2">
            <FiMapPin size={18} className="text-orange-600" />
            {profile.location}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {focusChips.map((chip) => (
            <span
              key={chip}
              className="px-4 py-1.5 text-sm font-medium rounded-full bg-white text-slate-700 border border-[#ece5d8] hover:border-orange-400 hover:text-orange-700 transition-colors cursor-default"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
            className="inline-flex items-center justify-center size-14 rounded-md border border-[#ece5d8] bg-white text-orange-600 hover:bg-orange-50 hover:border-orange-500 transition-colors"
          >
            <FiMail size={24} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex items-center justify-center size-14 rounded-md border border-[#ece5d8] bg-white text-orange-600 hover:bg-orange-50 hover:border-orange-500 transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex items-center justify-center size-14 rounded-md border border-[#ece5d8] bg-white text-orange-600 hover:bg-orange-50 hover:border-orange-500 transition-colors"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
