import Reveal from './Reveal'

export default function Launch() {
  return (
    <section className="section launch" id="launch" aria-labelledby="launch-heading">
      <div className="launch-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">The launch</p>
          <h2 className="display" id="launch-heading">We’re Just Getting Started.</h2>
        </Reveal>
        <Reveal as="p">
          Something special is taking shape behind the scenes. MELDLOOM already creates
          handmade candles, crochet art, resin products, gift hampers, 3D printed pieces,
          and personalized gifts. Website orders are coming soon — for now, order on
          Instagram and WhatsApp.
        </Reveal>
        <Reveal as="p" className="launch-mark">
          MELDLOOM — Where Ideas Take Shape.
        </Reveal>
      </div>
    </section>
  )
}
