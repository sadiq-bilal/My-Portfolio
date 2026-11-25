import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Button from './Button.jsx'

const DETAILS = [
  ['Problem', 'problem'],
  ['What I built', 'built'],
  ['What I learned', 'learned'],
]

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const { title, description, tech, image, github, live } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
      whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
      viewport={{ once: true, margin: '-60px' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-acc"
    >
      <div className="overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            width="640"
            height="360"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        ) : (
          <div
            role="img"
            aria-label={`${title} screenshot placeholder`}
            className="grid aspect-video place-items-center border-b border-dashed border-line bg-bg px-4 text-center text-xs text-mute"
          >
            Screenshot placeholder. Set image in projects.js
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-mute">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tech.map((name) => (
            <li key={name} className="rounded-md border border-line px-2.5 py-1 text-xs text-mute">
              {name}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && (
            <motion.dl
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3 overflow-hidden text-sm"
            >
              {DETAILS.map(([label, key]) => (
                <div key={key}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-acc">{label}</dt>
                  <dd className="mt-0.5 text-mute">{project[key]}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </AnimatePresence>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Button onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? 'Hide details' : 'Details'}
          </Button>
          {github ? (
            <Button variant="ghost" href={github}>
              Code
            </Button>
          ) : (
            <span className="text-xs text-mute">Code link coming soon</span>
          )}
          {live && (
            <Button variant="ghost" href={live}>
              Live demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}