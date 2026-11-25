import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import { personal } from '../data/personal.js'

const [lead, ...rest] = personal.about

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle title="About" />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5">
          <p className="text-xl leading-relaxed">{lead}</p>
          {rest.map((text) => (
            <p key={text} className="text-mute">
              {text}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 border-l border-line pl-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-acc">Education</h3>
            <p className="mt-2 text-sm text-mute">{personal.education}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-acc">Objective</h3>
            <p className="mt-2 text-sm text-mute">{personal.objective}</p>
          </div>
          <Button variant="ghost" href={personal.resume} download>
            Download resume
          </Button>
        </Reveal>
      </div>
    </section>
  )
}