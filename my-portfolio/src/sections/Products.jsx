// import SectionTitle from '../components/SectionTitle.jsx'
// import Reveal from '../components/Reveal.jsx'
// import Button from '../components/Button.jsx'
// import { products } from '../data/products.js'
// import { prefillSubject } from '../utils/prefill.js'

// function statusLabel({ link, price }) {
//   if (!link) return 'Coming soon'
//   return price || 'Available'
// }

// export default function Products() {
//   return (
//     <section id="products" className="mx-auto max-w-6xl px-5 py-20">
//       <SectionTitle
//         title="Digital products"
//         intro="Templates and code I plan to release. These are examples, not live listings."
//       />
//       <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((product, index) => {
//           const { title, description, type, format, link, icon: Icon } = product
//           return (
//             <li key={title}>
//               <Reveal
//                 delay={(index % 3) * 0.08}
//                 className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-card p-6"
//               >
//                 <div className="flex items-center justify-between">
//                   <Icon size={22} className="text-acc" aria-hidden />
//                   <span className="text-xs text-mute">{statusLabel(product)}</span>
//                 </div>
//                 <h3 className="font-bold">{title}</h3>
//                 <p className="text-sm text-mute">{description}</p>
//                 <p className="font-mono text-xs text-mute">
//                   {type} · {format}
//                 </p>
//                 <div className="mt-auto pt-2">
//                   {link ? (
//                     <Button href={link}>Get it</Button>
//                   ) : (
//                     <Button  href="#contact" onClick={() => prefillSubject(`Notify me: ${title}`)}>
//                       Notify me
//                     </Button>
//                   )}
//                 </div>
//               </Reveal>
//             </li>
//           )
//         })}
//       </ul>
//     </section>
//   )
// }