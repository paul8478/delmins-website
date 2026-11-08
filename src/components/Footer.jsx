
// TODO: replace '#' with the real Delmins profile URLs
const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.9 8.6H3.8V20h3.1V8.6zM5.3 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.2 13.6c0-3-1.6-5.2-4.6-5.2-1.5 0-2.6.8-3 1.6V8.6H9.6V20h3.1v-5.8c0-1.5.6-2.8 2.2-2.8s2.1 1.3 2.1 2.9V20h3.2v-6.4z" />
      </svg>
    ),
  },
]

export default function Footer({ navigate }) {
  const handleNav = (e, view) => {
    e.preventDefault()
    if (navigate) {
      navigate(view)
    } else {
      let targetHash = ''
      if (view === 'story') targetHash = 'our-journey'
      else if (view === 'privacy') targetHash = 'privacy-policy'
      else if (view === 'terms') targetHash = 'terms-and-conditions'
      else if (view !== 'home') targetHash = view
      window.location.hash = targetHash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer-retro">
      <div className="footer-retro-inner">
        <div className="footer-retro-frame">
          <span className="footer-retro-corner tl" aria-hidden="true" />
          <span className="footer-retro-corner tr" aria-hidden="true" />
          <span className="footer-retro-corner bl" aria-hidden="true" />
          <span className="footer-retro-corner br" aria-hidden="true" />
          <span className="footer-retro-mark top" aria-hidden="true">✦</span>
          <span className="footer-retro-mark bottom" aria-hidden="true">✦</span>

          <div className="footer-retro-top">
            {/* Left: Brand Logo, Tagline & Sub-copy */}
            <div className="footer-retro-brand">
              <div className="footer-retro-brand-copy">
                <a
                  href="#top"
                  className="footer-retro-logo-wrap"
                  aria-label="Delmins home"
                  onClick={(e) => handleNav(e, 'home')}
                >
                  <img
                    src="/logo-light.png"
                    alt="Delmins"
                    className="footer-retro-logo"
                  />
                </a>

                <p className="footer-retro-tagline">
                  India's Favourite Pani Puri Destination
                </p>

                <p className="footer-retro-sub">
                  A love letter to India's street food tradition — the craft, the regions, the ritual and the crunch.
                </p>
              </div>
            </div>

            {/* Middle: Quick Links, stacked vertically */}
            <div className="footer-retro-nav-col">
              {/* <div className="footer-retro-nav-heading">
                <span className="footer-retro-nav-flourish">✦</span>
                Quick Links
                <span className="footer-retro-nav-flourish">✦</span>
              </div> */}
              <nav className="footer-retro-nav">
                <a href="#top" onClick={(e) => handleNav(e, 'home')}>
                  Home
                </a>
                <a href="#our-journey" onClick={(e) => handleNav(e, 'story')}>
                  Our Journey
                </a>
                <a href="#blog" onClick={(e) => handleNav(e, 'blog')}>
                  Blog
                </a>
                <a href="#about" onClick={(e) => handleNav(e, 'about')}>
                  About Us
                </a>
              </nav>
            </div>

            {/* Get in Touch */}
            <div className="footer-retro-contact-col">
              {/* <div className="footer-retro-nav-heading">
                <span className="footer-retro-nav-flourish">✦</span>
                Get in Touch
                <span className="footer-retro-nav-flourish">✦</span>
              </div> */}
              <div className="footer-retro-contact">
                <a href="mailto:namaste@delminsfoods.com">namaste@delminsfoods.com</a>
                <a href="mailto:export@delminsfoods.com">export@delminsfoods.com</a>
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Right: Social Media Links */}
            <div className="footer-retro-slogan-col">
              <div className="footer-social">
                {SOCIAL_LINKS.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="footer-social-link"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Policy Links */}
          <div className="footer-retro-legal">
            <a
              href="#privacy-policy"
              className="footer-legal-link"
              onClick={(e) => handleNav(e, 'privacy')}
            >
              Privacy Policy
            </a>
            <span className="footer-legal-sep">✦</span>
            <a
              href="#terms-and-conditions"
              className="footer-legal-link"
              onClick={(e) => handleNav(e, 'terms')}
            >
              Terms &amp; Conditions
            </a>
          </div>

          {/* Divider */}
          <div className="footer-retro-line" />

          {/* Bottom Credits */}
          <div className="footer-retro-bottom">
            <span>© 2026 Delmins Foods Pvt. Ltd. &nbsp;|&nbsp; All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
