import Reveal from './Reveal'

export default function Launch() {
  return (
    <section className="section launch" id="launch">
      <div className="launch-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">The launch</p>
          <h2 className="display">We’re Just Getting Started.</h2>
        </Reveal>
        <Reveal as="p">
          Something special is taking shape behind the scenes. MELDLOOM is preparing to
          bring you a collection of creative, aesthetic, handmade, personalized, and
          innovative products.
        </Reveal>
        <Reveal as="p" className="launch-mark">
          MELDLOOM — Where Ideas Take Shape.
        </Reveal>
      </div>
    </section>
  )
}
