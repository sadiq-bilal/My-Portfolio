import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { personal } from '../data/personal.js'

const LEFT = ['about', 'projects', 'skills']
const RIGHT = ['journey', 'products', 'contact']
export const SECTION_IDS = ['home', ...LEFT, ...RIGHT]

function NavLinks({ ids, active, className = '' }) {
  return (
    <ul className={`hidden items-center gap-7 text-sm capitalize md:flex ${className}`}>
      {ids.map((id) => (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={`py-2 transition ${active === id ? 'text-acc' : 'text-mute hover:text-fg'}`}
          >
            {id}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-lg">
      <nav
        aria-label="Main"
        className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[1fr_auto_1fr] md:gap-10"
      >
        <NavLinks ids={LEFT} active={active} className="justify-end" />

        <a href="#home" className="justify-self-start text-lg font-bold md:justify-self-center">
          {personal.name[9]}{personal.name[15]}
          <span className="text-acc">.dev</span>
        </a>

        <div className="flex items-center justify-end gap-7">
          <NavLinks ids={RIGHT} active={active} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg border border-line md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-3 capitalize ${active === id ? 'text-acc' : 'text-mute'}`}
                >
                  {id}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}