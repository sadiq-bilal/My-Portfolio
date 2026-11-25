import Reveal from './Reveal.jsx'

export default function SkillCard({ category, items, index }) {
  return (
    <Reveal delay={index * 0.08} className="md:px-8 md:first:pl-0 md:last:pr-0">
      <p className="font-mono text-xs text-acc">{String(index + 1).padStart(2, '0')}</p>
      <h3 className="mb-5 mt-2 text-xl font-bold">{category}</h3>
      <ul className="space-y-3">
        {items.map(({ name, icon: Icon }) => (
          <li key={name} className="flex items-center gap-3 text-mute">
            <Icon size={18} className="text-acc" aria-hidden />
            {name}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}