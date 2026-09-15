import Reveal from './Reveal'

export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Brand introduction</p>
          <h2 className="display">Something Creative Is Taking Shape</h2>
          <p className="lede">
            MELDLOOM brings creativity, craftsmanship, and innovation together to create
            products that feel different, thoughtful, and uniquely yours. From handmade
            creations to personalized gifts and innovative designs, every idea has the
            potential to take shape.
          </p>
        </Reveal>
        <div className="meaning">
          <Reveal as="article">
            <h3>MELD</h3>
            <p>Bringing different ideas, materials, creativity, and innovation together.</p>
          </Reveal>
          <Reveal as="article">
            <h3>LOOM</h3>
            <p>Creating, shaping, crafting, and turning ideas into reality.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
