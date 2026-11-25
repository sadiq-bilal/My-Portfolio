import { motion } from 'motion/react'
import Button from '../components/Button.jsx'
import { personal } from '../data/personal.js'
import { socialLinks } from '../data/socialLinks.js'

const textLink =
  'py-2 text-sm text-mute underline-offset-4 transition hover:text-acc hover:underline'

// Staggered entrance: each element starts a little after the one before it.
const enter = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

export default function Hero() {
  const [start, highlight, end] = personal.headline

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-photo mx-5 mt-20 h-[32rem] overflow-hidden rounded-2xl border border-line sm:mx-8">
        <img
          src={personal.photo}
          alt={`Portrait of ${personal.name}`}
          width="880"
          height="1100"
          fetchPriority="high"
          className="size-full object-cover object-top"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 lg:flex lg:min-h-screen lg:items-center lg:pb-0 lg:pt-20">
        <div className="lg:max-w-xl">
          <motion.p {...enter(0)} className="flex items-center gap-2 text-sm text-mute">
            <span aria-hidden className="size-2 rounded-full bg-lime" />
            Open to frontend internships
          </motion.p>

          <motion.h1
            {...enter(0.06)}
            className="mt-5 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
          >
            {start}
            <span className="text-acc">{highlight}</span>
            {end}
          </motion.h1>

          <motion.p {...enter(0.12)} className="mt-5 text-lg text-mute">
            {personal.name}. {personal.intro}
          </motion.p>

          <motion.div {...enter(0.18)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">View projects</Button>
            <Button variant="ghost" href="#contact">
              Contact me
            </Button>
          </motion.div>

          <motion.div {...enter(0.24)} className="mt-4 flex flex-wrap gap-x-6">
            <a className={textLink} href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className={textLink} href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className={textLink} href={personal.resume} download>
              Download resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}