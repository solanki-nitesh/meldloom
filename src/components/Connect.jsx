import Reveal from './Reveal'
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YoutubeIcon } from './Icons'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/meldloom',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61593659355469',
    icon: FacebookIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@meldloom',
    icon: YoutubeIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919530202020',
    icon: WhatsAppIcon,
  },
]

export default function Connect() {
  return (
    <section className="section" id="connect">
      <div className="container">
        <Reveal className="connect-panel">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2 className="display connect-title">Stay Connected</h2>
            <p className="lede">Be the first to discover what’s taking shape at MELDLOOM.</p>
            <p className="handle">@meldloom</p>
          </div>
          <div className="socials">
            {socials.map((item) => (
              <a
                key={item.label}
                className="social"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon />
                {item.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
