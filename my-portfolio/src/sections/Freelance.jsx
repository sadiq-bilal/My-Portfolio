// import Reveal from '../components/Reveal.jsx'
// import Button from '../components/Button.jsx'
// import { siteConfig } from '../config/siteConfig.js'
// import { products } from '../data/products.js'
// import { prefillSubject } from '../utils/prefill.js'

// // One entry per availability setting in siteConfig.js.
// const STATES = {
//   'coming-soon': {
//     label: 'Coming soon',
//     dot: 'bg-amber-400',
//     message: 'I am getting ready to take on freelance website projects. Send a message to hear when I start.',
//     button: 'Get notified',
//   },
//   open: {
//     label: 'Open for projects',
//     dot: 'bg-emerald-400',
//     message: 'I am available for new projects. Tell me what you need and I will reply with next steps.',
//     button: 'Start an enquiry',
//   },
//   unavailable: {
//     label: 'Currently unavailable',
//     dot: 'bg-red-400',
//     message: 'I am not taking new projects right now. You can still send a message and I will reply when I can.',
//     button: 'Send a message',
//   },
// }

// export default function Freelance() {
//   const state = STATES[siteConfig.availability] ?? STATES['coming-soon']

//   return (
//     <section id="freelance" className="mx-auto max-w-6xl px-5 py-20">
//       <Reveal className="rounded-2xl border border-line bg-card p-8 sm:p-12">
//         <p role="status" className="inline-flex items-center gap-2 text-sm">
//           <span className={`size-2 rounded-full ${state.dot}`} />
//           {state.label}
//         </p>
//         <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
//         <p className="mt-3 max-w-xl text-mute">{state.message}</p>
//         <p className="mt-3 max-w-xl text-sm text-mute">{products.map((p) => p.title).join(' · ')}</p>
//         <div className="mt-8 flex flex-wrap gap-3">
//           <Button href="#contact" onClick={() => prefillSubject('Project enquiry')}>
//             {state.button}
//           </Button>
//           <Button variant="ghost" href="#contact">
//             Contact
//           </Button>
//         </div>
//       </Reveal>
//     </section>
//   )
// }