import HeroArt from './HeroArt'

export default function Hero({ logo }) {
  return (
    <section className="hero" id="top">
      <HeroArt />
      <div className="hero-content">
        <img className="brand-logo large" src={logo} alt="MELDLOOM" />
        <p className="eyebrow">A creative world in the making</p>
        <h1 className="display">MELDLOOM</h1>
        <p className="tagline">Where Ideas Take Shape.</p>
        <span className="hero-rule" aria-hidden="true" />
        <p className="statement">
          Different ideas come together, take shape, and become something meaningful.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#launch">
            Coming Soon
          </a>
          <a className="btn btn-ghost" href="#connect">
            Follow Us
          </a>
        </div>
      </div>
    </section>
  )
}
