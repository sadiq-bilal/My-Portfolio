import Reveal from './Reveal.jsx'

export default function SectionTitle({ title, intro }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-mute">{intro}</p>}
    </Reveal>
  )
}