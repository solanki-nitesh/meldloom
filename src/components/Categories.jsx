import Reveal from './Reveal'
import { CandleIcon, CrochetIcon, GiftIcon, MoreIcon, PrintIcon, ResinIcon } from './Icons'

const categories = [
  {
    title: 'Candle',
    text: 'Aesthetic handmade candles designed to add warmth and character.',
    icon: CandleIcon,
  },
  {
    title: 'Crochet Art',
    text: 'Creative yarn-based pieces made with care and imagination.',
    icon: CrochetIcon,
  },
  {
    title: 'Resin',
    text: 'Unique resin creations combining color, texture, and creativity.',
    icon: ResinIcon,
  },
  {
    title: 'Gift Hampers',
    text: 'Thoughtfully curated gifts for special moments.',
    icon: GiftIcon,
  },
  {
    title: '3D Printing',
    text: 'Modern, innovative creations brought to life through technology.',
    icon: PrintIcon,
  },
  {
    title: 'And Many More',
    text: 'New ideas, products, and creative experiments are always taking shape.',
    icon: MoreIcon,
  },
]

export default function Categories() {
  return (
    <section className="section" id="coming">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">What you’ll find</p>
          <h2 className="display">What’s Coming to MELDLOOM</h2>
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
          under one brand.
        </Reveal>
      </div>
    </section>
  )
}
