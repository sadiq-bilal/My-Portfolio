import { ArrowUp } from 'lucide-react'
import { SECTION_IDS } from './Navbar.jsx'
import { personal } from '../data/personal.js'
import { socialLinks } from '../data/socialLinks.js'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold">
            SB
            <span className="text-acc">.dev</span>
          </p>
          <p className="mt-1 max-w-xs text-sm text-mute">
            {personal.title}. Open to frontend internships.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm capitalize text-mute">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a className="hover:text-acc" href={`#${id}`}>
                {id}
              </a>
            </li>
          ))}
          <li>
            <a className="hover:text-acc" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-acc" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>

        <a
          href="#home"
          aria-label="Back to top"
          className="grid size-11 place-items-center rounded-full border border-line hover:border-acc hover:text-acc"
        >
          <ArrowUp size={18} />
        </a>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-mute">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  )
}