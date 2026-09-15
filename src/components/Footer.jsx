export default function Footer({ logo }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img className="brand-logo" src={logo} alt="MELDLOOM" />
          <strong>MELDLOOM</strong>
          <span>Where Ideas Take Shape.</span>
        </div>
        <p className="copyright">© 2026 MELDLOOM. All rights reserved.</p>
      </div>
    </footer>
  )
}
