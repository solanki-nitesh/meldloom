import Reveal from './Reveal'

export default function Order() {
  return (
    <section className="section" id="order" aria-labelledby="order-heading">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">How to order</p>
          <h2 className="display" id="order-heading">Order on Instagram & WhatsApp</h2>
          <p className="lede">
            Website orders are coming soon. Right now, you can order MELDLOOM handmade
            candles, crochet art, resin products, gift hampers, 3D printed pieces, and
            personalized gifts on Instagram and WhatsApp.
          </p>
        </Reveal>
        <Reveal className="order-actions">
          <a
            className="btn btn-primary"
            href="https://www.instagram.com/meldloom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on Instagram
          </a>
          <a
            className="btn btn-ghost"
            href="https://wa.me/918530202020"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
        </Reveal>
        <div className="faq">
          <Reveal as="article">
            <h3>What is MELDLOOM?</h3>
            <p>
              MELDLOOM is a creative lifestyle brand that brings ideas, craftsmanship,
              and innovation together. We create handmade candles, crochet art, resin
              products, personalized gifts, gift hampers, and 3D printed designs.
            </p>
          </Reveal>
          <Reveal as="article">
            <h3>How do I place an order?</h3>
            <p>
              Message MELDLOOM on Instagram at @meldloom or WhatsApp at 8530202020.
              Online checkout on this website is coming soon.
            </p>
          </Reveal>
          <Reveal as="article">
            <h3>What products can I order now?</h3>
            <p>
              You can enquire about aesthetic handmade candles, crochet and yarn
              creations, resin pieces, custom gifts, gift hampers, 3D printed products,
              and other lifestyle ideas taking shape at MELDLOOM.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
