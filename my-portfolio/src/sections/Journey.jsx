import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { personal } from '../data/personal.js'

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle title="Journey" />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {personal.journey.map(([title, text], index) => (
          <li key={title}>
            <Reveal delay={index * 0.04} className="h-full rounded-2xl border border-line bg-card p-6">
              <p className="text-4xl font-extrabold text-fg/15">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-mute">{text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}