import { useState } from 'react'
import { motion } from 'framer-motion'
import { ease, reveal } from '../components/ease.js'
import Faq from '../components/Faq.jsx'
export default function ContactPage({ onBackHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'export',
    cityCountry: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
  }

  return (
    <article className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero container">
        <div className="contact-hero-header">
          <motion.div className="contact-ornament" {...reveal}>
            <span className="contact-ornament-line" />
            <span className="contact-hindi-tag">Contuct Us</span>
            <span className="contact-ornament-line" />
          </motion.div>
          <motion.h1 className="contact-title" {...reveal}>
            Let's Talk Chaat, Export &amp; Partnerships
          </motion.h1>
          <motion.div className="contact-divider" aria-hidden="true" {...reveal}>
            <span className="contact-divider-line" />
            <svg className="contact-divider-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="contact-divider-line" />
          </motion.div>
          <motion.p className="contact-subtitle" {...reveal}>
            Whether you want to stock Delmins in your city, discuss international container consignments,
            or enquire about our hygienic manufacturing — our trade desk is at your service.
          </motion.p>
        </div>

        {/* 2-Column Grid: Left Info & Right Archival Form */}
        <div className="contact-grid">
          {/* Left Column: Official Desks & Direct Channels */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Card 1: Trade & International Export */}
            <div className="contact-card">
              <span className="contact-card-corner tl" aria-hidden="true" />
              <span className="contact-card-corner tr" aria-hidden="true" />
              <span className="contact-card-corner bl" aria-hidden="true" />
              <span className="contact-card-corner br" aria-hidden="true" />

              <div className="contact-card-head">
                <span className="contact-card-icon">🌐</span>
                <div>
                  <span className="contact-card-eyebrow">INTERNATIONAL TRADE DESK</span>
                  <h3 className="contact-card-h3">Global Export &amp; Consignments</h3>
                </div>
              </div>

              <p className="contact-card-p">
                Certified by APEDA and registered with FIEO for compliant food exports to North America,
                the UK, UAE, and Europe. FCL and LCL shipments available with customized export labeling.
              </p>

              <div className="contact-detail-list">
                <div className="contact-detail-row">
                  <span className="contact-detail-label">Export Desk</span>
                  <a href="mailto:export@delminsfoods.com" className="contact-link">export@delminsfoods.com</a>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-label">Commercial Phone</span>
                  <a href="tel:+919876543210" className="contact-link">+91 98765 43210 / WhatsApp</a>
                </div>
                {/* <div className="contact-detail-row contact-detail-row-stack">
                  <span className="contact-detail-label">Accreditations</span>
                  <div className="contact-tag-group">
                    <span className="contact-tag-pill">APEDA</span>
                    <span className="contact-tag-pill">FIEO</span>
                    <span className="contact-tag-pill">FSSAI Central</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Card 2: Registered Headquarters */}
            {/* <div className="contact-card">
              <span className="contact-card-corner tl" aria-hidden="true" />
              <span className="contact-card-corner tr" aria-hidden="true" />
              <span className="contact-card-corner bl" aria-hidden="true" />
              <span className="contact-card-corner br" aria-hidden="true" />

              <div className="contact-card-head">
                <span className="contact-card-icon">🏛️</span>
                <div>
                  <span className="contact-card-eyebrow">HEADQUARTERS &amp; FACILITY</span>
                  <h3 className="contact-card-h3">Delmins Food Private Limited</h3>
                </div>
              </div>

              <p className="contact-card-p">
                State-of-the-art automated, touchless puri extrusion and moisture-sealed packaging plant
                operating under stringent FSDA Uttar Pradesh safety protocols.
              </p>

              <div className="contact-detail-list">
                <div className="contact-detail-row">
                  <span className="contact-detail-label">General Desk</span>
                  <a href="mailto:namaste@delminsfoods.com" className="contact-link">namaste@delminsfoods.com</a>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-plain-val">Uttar Pradesh, India (Pin 208001)</span>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-label">Central Lic</span>
                  <span className="contact-plain-val">FSSAI 1002401100018</span>
                </div>
              </div>
            </div> */}

            {/* Card 3: Quick Personal Delivery Notice */}
            {/* <div className="contact-blinkit-callout">
              <div className="cb-icon">⚡</div>
              <div className="cb-text">
                <b>Craving pani puri right now?</b>
                <p>Delmins ready-to-fill and fry-at-home packs are delivered in 10 minutes on Blinkit.</p>
              </div>
              <a
                href="https://blinkit.com/s/?q=delmins"
                target="_blank"
                rel="noreferrer"
                className="btn btn-saffron btn-sm"
              >
                Open Blinkit →
              </a>
            </div> */}
          </motion.div>



          {/* Right Column: Archival Inquiry Form */}
          {/* Card 2: Registered Headquarters */}
          <div className="contact-card">
            <span className="contact-card-corner tl" aria-hidden="true" />
            <span className="contact-card-corner tr" aria-hidden="true" />
            <span className="contact-card-corner bl" aria-hidden="true" />
            <span className="contact-card-corner br" aria-hidden="true" />

            <div className="contact-card-head">
              <span className="contact-card-icon">🏛️</span>
              <div>
                <span className="contact-card-eyebrow">HEADQUARTERS &amp; FACILITY</span>
                <h3 className="contact-card-h3">Delmins Food Private Limited</h3>
              </div>
            </div>

            <p className="contact-card-p">
              State-of-the-art automated, touchless puri extrusion and moisture-sealed packaging plant
              operating under stringent FSDA Uttar Pradesh safety protocols.
            </p>

            <div className="contact-detail-list">
              <div className="contact-detail-row">
                <span className="contact-detail-label">General Desk</span>
                <a href="mailto:namaste@delminsfoods.com" className="contact-link">namaste@delminsfoods.com</a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Location</span>
                <span className="contact-plain-val">Uttar Pradesh, India (Pin 208001)</span>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Central Lic</span>
                <span className="contact-plain-val">FSSAI 1002401100018</span>
              </div>
            </div>
          </div>

        </div>
      </section>




      <Faq />


      {/* Back to Home CTA */}
      <section className="container contact-bottom-nav">
        <button className="btn btn-dark" onClick={onBackHome}>
          ← Back to Homepage
        </button>
      </section>
    </article>
  )
}

