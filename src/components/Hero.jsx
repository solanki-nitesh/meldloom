import HeroArt from './HeroArt'

export default function Hero({ logo }) {
  return (
    <section className="hero" id="top" aria-labelledby="brand-name">
      <HeroArt />
      <div className="hero-content">
        <img className="brand-logo large" src={logo} alt="MELDLOOM official logo" width="92" height="69" />
        <p className="eyebrow">A creative world in the making</p>
        <h1 className="display" id="brand-name">MELDLOOM</h1>
        <p className="tagline">Where Ideas Take Shape.</p>
        <span className="hero-rule" aria-hidden="true" />
        <p className="statement">
          Handmade candles, crochet art, resin, personalized gifts, and more — different
          ideas come together, take shape, and become something meaningful.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#order">
            Order Now
          </a>
          <a className="btn btn-ghost" href="#coming">
            View Products
          </a>
        </div>
      </div>
    </section>
  )
}
