import { useState } from 'react'
import { motion } from 'framer-motion'
import { ease, reveal } from '../components/ease.js'
import Faq from '../components/Faq.jsx'
import LeadershipCards from '../components/LeadershipCards.jsx'
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
      {/* The Custodians of Tradition */}
      <LeadershipCards />

      <Faq />

      {/* Trade Desk & Headquarters */}
      <section className="contact-hero container">
        <div className="contact-hero-header">
          <motion.div className="contact-ornament" {...reveal}>
            {/* <span className="contact-ornament-line" /> */}
            {/* <span className="contact-hindi-tag">About Us</span> */}
            {/* <span className="contact-ornament-line" /> */}
          </motion.div>
          <motion.h1 className="contact-title" {...reveal}>
            Let's Talk Chat, Export &amp; Partnerships
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

        {/* Single Combined Card: Trade Desk + Headquarters */}
        <div className="contact-single-wrap">
          <motion.div
            className="contact-card contact-card-combined"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="contact-card-corner tl" aria-hidden="true" />
            <span className="contact-card-corner tr" aria-hidden="true" />
            <span className="contact-card-corner bl" aria-hidden="true" />
            <span className="contact-card-corner br" aria-hidden="true" />

            {/* Combined: Trade Desk + Headquarters, under one title */}
            <div className="contact-card-head">
              <span className="contact-card-icon">🏛️</span>
              <div>
                <span className="contact-card-eyebrow">TRADE DESK &amp; HEADQUARTERS</span>
                <h3 className="contact-card-h3">Delmins Food Private Limited</h3>
              </div>
            </div>

            <p className="contact-card-p">
              Certified by APEDA and registered with FIEO for compliant food exports to North America, the UK,
              UAE, and Europe, with FCL and LCL shipments available with customized export labeling — all from
              our state-of-the-art automated, touchless puri extrusion and moisture-sealed packaging plant,
              operating under stringent FSDA Uttar Pradesh safety protocols.
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
          </motion.div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="container contact-bottom-nav">
        <button className="btn btn-dark" onClick={onBackHome}>
          ← Back to Homepage
        </button>
      </section>
    </article>
  )
}

