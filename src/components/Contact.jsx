import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section intro" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal className="contact-box">
          <p className="eyebrow">Contact</p>
          <h2 className="display" id="contact-heading">Have an Idea? Let’s Give It Shape.</h2>
          <p className="lede">
            For product orders, custom ideas, collaborations, or questions, message us on
            Instagram or WhatsApp. Website checkout is coming soon.
          </p>
          <div className="order-actions">
            <a
              className="btn btn-primary whatsapp"
              href="https://wa.me/918530202020"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order MELDLOOM on WhatsApp at 8530202020"
            >
              WhatsApp: 8530202020
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.instagram.com/meldloom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @meldloom
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
