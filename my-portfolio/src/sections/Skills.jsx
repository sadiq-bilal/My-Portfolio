import SectionTitle from '../components/SectionTitle.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle title="Skills" />
      <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-line">
        {skills.map((group, index) => (
          <SkillCard key={group.category} {...group} index={index} />
        ))}
      </div>
    </section>
  )
}