import {
  Atom,
  Braces,
  Code,
  FolderGit2,
  GitBranch,
  Palette,
  SquareTerminal,
  Terminal,
  Wind,
} from 'lucide-react'

// To add a skill, add { name, icon } to a category. To add a category, add a new object.
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: Code },
      { name: 'CSS3', icon: Palette },
      { name: 'JavaScript', icon: Braces },
      { name: 'React.js', icon: Atom },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    category: 'Programming',
    items: [{ name: 'Python', icon: Terminal }],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: FolderGit2 },
      { name: 'VS Code', icon: SquareTerminal },
    ],
  },
]