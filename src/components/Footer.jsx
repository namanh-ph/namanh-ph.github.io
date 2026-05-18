import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import profile from '../data/profileData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="scroll-mt-24 bg-white border-t border-[#ece5d8]"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2 items-end">
          <div>
            <p className="text-lg font-semibold text-slate-900">
              {profile.displayName}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {profile.email}
            </p>
          </div>

          <div className="md:text-right">
            <div className="flex md:justify-end items-center gap-4 text-slate-600">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="hover:text-orange-600 transition-colors"
              >
                <FiMail size={20} />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-600 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-orange-600 transition-colors"
              >
                <FiGithub size={20} />
              </a>
            </div>
            <p className="mt-4 text-[13px] text-slate-500">
              © {year} {profile.displayName} · Built with React, Vite, and Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
