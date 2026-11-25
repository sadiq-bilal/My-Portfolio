import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Button from '../components/Button.jsx'
import { projects } from '../data/projects.js'
import { socialLinks } from '../data/socialLinks.js'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle title="Projects" intro="Things I have built while learning web development." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="ghost" href={socialLinks.github}>
          All projects on GitHub
        </Button>
      </div>
    </section>
  )
}