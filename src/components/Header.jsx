const links = [
  { href: '#coming', label: 'Products' },
  { href: '#order', label: 'Order' },
  { href: '#connect', label: 'Follow' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ logo, scrolled, menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a className="brand-lockup" href="#top" onClick={close} aria-label="MELDLOOM home">
            <img className="brand-logo" src={logo} alt="MELDLOOM official logo" width="44" height="33" />
            <span className="brand-word">MELDLOOM</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
