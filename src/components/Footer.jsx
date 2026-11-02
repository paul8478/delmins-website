import { FooterPuriBowlIcon, FooterPuriPlateIcon } from './RetroEmblems.jsx'

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
              <FooterPuriBowlIcon className="footer-retro-icon footer-retro-icon-left" />
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
                  India's Favourite Pani Puri &amp; Chaat Destination
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
                  Chronicles / Blog
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
                <a href="tel:+919876543210">+91 98765 43210</a>
                <span>Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Right: Hindi Slogan */}
            <div className="footer-retro-slogan-col">
              <span className="footer-retro-slogan-text">
                एक और प्लेट,<br />भैया!
              </span>
              <FooterPuriPlateIcon className="footer-retro-icon footer-retro-icon-right" />
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
