import Reveal from './Reveal'

const steps = ['Idea', 'Create', 'Shape', 'MELDLOOM']

export default function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy" aria-labelledby="philosophy-heading">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our philosophy</p>
          <h2 className="display" id="philosophy-heading">Ideas → Creativity → Creation</h2>
        </Reveal>
        <Reveal className="flow" aria-label="From idea to MELDLOOM">
          {steps.map((step, index) => (
            <div key={step}>
              {index > 0 && (
                <div className="flow-arrow" aria-hidden="true">
                  ↓
                </div>
              )}
              <div className={`flow-step${step === 'MELDLOOM' ? ' final' : ''}`}>{step}</div>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="philosophy-note">
          We believe the best creations begin with an idea.
        </Reveal>
      </div>
    </section>
  )
}
