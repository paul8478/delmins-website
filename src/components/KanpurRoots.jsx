import { motion } from 'framer-motion'
import { ease, reveal } from './ease.js'
import './KanpurRoots.css'

// TODO: confirm the story copy and stats with the client before going live.
const STATS = [
  { val: 'Kanpur', lbl: 'Our Home' },
  { val: 'Ganga', lbl: 'Riverside City' },
  { val: 'FSDA', lbl: 'UP Licensed' },
]


export default function KanpurRoots() {
  return (
    <section className="kanpur-section" id="kanpur" aria-labelledby="kanpur-title">
      <div className="container kanpur-grid">
        {/* Illustration */}
        <motion.div
          className="kanpur-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="kanpur-frame">
            <img
              src="/mill.png"
              alt="Historic red-brick mill and clock tower in Kanpur, glowing at sunset"
              className="kanpur-art"
              loading="lazy"
              draggable={false}
            />
            <div className="kanpur-stamp" aria-hidden="true">
              <span className="kanpur-stamp-top">MADE IN</span>
              <span className="kanpur-stamp-mid">KANPUR</span>
              <span className="kanpur-stamp-bot">✦ U.P. ✦</span>
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <div className="kanpur-content">
          <motion.span className="kanpur-eyebrow" {...reveal}>
            ✦ ROOTED IN KANPUR ✦
          </motion.span>

          <motion.h2
            id="kanpur-title"
            className="kanpur-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
          >
            From the Lanes of Kanpur to Plates Across India
          </motion.h2>

          <div className="kanpur-divider" aria-hidden="true">
            <span className="kanpur-line" />
            <span className="kanpur-sparkle">✦</span>
            <span className="kanpur-line" />
          </div>

          <motion.p
            className="kanpur-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            Delmins was born in Kanpur — a city on the banks of the Ganga where evenings
            are measured in street-side plates and the call of the golgappa wala. That
            spirit of crowded lanes, generous hands and fearless flavour is what we carry
            into every pack we make.
          </motion.p>

          <motion.p
            className="kanpur-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            Kanpur gave us our first taste testers, our toughest critics and our home.
            Wherever Delmins travels next, it will always taste a little like home.
          </motion.p>

          <motion.div
            className="kanpur-stats"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.26 }}
          >
            {STATS.map(({ val, lbl }) => (
              <div className="kanpur-stat-box" key={lbl}>
                <span className="kanpur-stat-val">{val}</span>
                <span className="kanpur-stat-lbl">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
