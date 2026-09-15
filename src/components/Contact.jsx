import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section intro" id="contact">
      <div className="container">
        <Reveal className="contact-box">
          <p className="eyebrow">Contact</p>
          <h2 className="display">Have an Idea? Let’s Give It Shape.</h2>
          <p className="lede">
            For inquiries, collaborations, custom ideas, or product questions:
          </p>
          <a
            className="btn btn-primary whatsapp"
            href="https://wa.me/918530202020"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: 8530202020
          </a>
        </Reveal>
      </div>
    </section>
  )
}
