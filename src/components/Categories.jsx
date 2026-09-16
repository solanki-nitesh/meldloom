import Reveal from './Reveal'
import { CandleIcon, CrochetIcon, GiftIcon, MoreIcon, PrintIcon, ResinIcon } from './Icons'

const categories = [
  {
    title: 'Handmade Candles',
    text: 'Aesthetic handmade candles designed to add warmth and character.',
    icon: CandleIcon,
  },
  {
    title: 'Crochet Art',
    text: 'Creative yarn and crochet pieces made with care and imagination.',
    icon: CrochetIcon,
  },
  {
    title: 'Resin Products',
    text: 'Unique resin creations combining color, texture, and creativity.',
    icon: ResinIcon,
  },
  {
    title: 'Gift Hampers',
    text: 'Thoughtfully curated gift hampers for special moments.',
    icon: GiftIcon,
  },
  {
    title: '3D Printed Products',
    text: 'Modern, innovative 3D printed creations brought to life through technology.',
    icon: PrintIcon,
  },
  {
    title: 'Personalized Gifts',
    text: 'Custom gifts, unique lifestyle pieces, and more creative ideas always taking shape.',
    icon: MoreIcon,
  },
]

export default function Categories() {
  return (
    <section className="section" id="coming" aria-labelledby="coming-heading">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">What you’ll find</p>
          <h2 className="display" id="coming-heading">What’s Coming to MELDLOOM</h2>
        </Reveal>
        <div className="categories">
          {categories.map((item) => (
            <Reveal as="article" className="card" key={item.title}>
              <item.icon />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="category-note">
          Personalized gifts, unique lifestyle pieces, and more creative ideas — all
          under one brand. Website orders coming soon; order on Instagram and WhatsApp.
        </Reveal>
      </div>
    </section>
  )
}
