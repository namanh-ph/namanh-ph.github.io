import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import profile from '../data/profileData'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#work-experience', label: 'Experience' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#fbf7f1]/90 backdrop-blur border-b border-[#ece5d8]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a
          href="#about"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight text-slate-900 hover:text-orange-600 transition-colors"
        >
          {profile.displayName}
        </a>

        <nav className="hidden md:flex gap-7 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-underline text-slate-700 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center size-10 rounded-md text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[#ece5d8] bg-[#fbf7f1]/95 backdrop-blur">
          <ul className="px-6 py-3 divide-y divide-[#ece5d8]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-slate-700 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
