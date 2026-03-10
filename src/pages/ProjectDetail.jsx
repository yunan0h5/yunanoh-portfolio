import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import s from './ProjectDetail.module.css'

/* ── Per-project data ── (add more as needed) */
const PROJECT_DATA = {
  'me-cloud': {
    title: 'ME CLOUD MOBILE\nAPP DESIGN',
    subtitle: 'UI/UX Design · Case Study · Prototype',
    emoji: '☁️',
    grad: 'linear-gradient(135deg,#FFE4F2,#D7FF80 80%)',
    bannerGrad: 'linear-gradient(135deg,#C8ABFF,#9B7EC8)',
    tags: ['Figma', 'Illustrator', 'Photoshop', 'Maze'],
  },
  'apple-music': {
    title: 'APPLE MUSIC MOBILE\nAPP RE-DESIGN',
    subtitle: 'UI/UX Design · App Re-Design · Prototype',
    emoji: '📱',
    grad: 'linear-gradient(135deg,#FFE4F2,#FF9AD2)',
    bannerGrad: 'linear-gradient(135deg,#FFE4F2,#FF9AD2)',
    tags: ['Figma', 'Photoshop', 'UX Research', 'Prototype'],
  },
  'to-dogether': {
    title: 'TO-DOGETHER MOBILE\nAPP DESIGN',
    subtitle: 'UI/UX Design · Case Study · Prototype',
    emoji: '💌',
    grad: 'linear-gradient(135deg,#FFF0F0,#FF7A7A)',
    bannerGrad: 'linear-gradient(135deg,#FFF0F0,#FF7A7A)',
    tags: ['Figma', 'Procreate', 'UX Research', 'Case Study'],
  },
  'comme-des-garcons': {
    title: 'COMME DES GARCONS\nWEBSITE RE-DESIGN',
    subtitle: 'UI/UX Design · Web Development · Case Study',
    emoji: '🖤',
    grad: 'linear-gradient(135deg,#f0f0f0,#222)',
    bannerGrad: 'linear-gradient(135deg,#f0f0f0,#333)',
    tags: ['HTML', 'CSS', 'Javascript', 'Figma'],
  },
}

export default function ProjectDetail() {
  const navigate  = useNavigate()
  const { id }    = useParams()
  const data      = PROJECT_DATA[id] || PROJECT_DATA['me-cloud']

  return (
    <div className={s.page}>

      {/* ── back nav ── */}
      <div className={s.navRow}>
        <button className={s.backBtn} onClick={() => navigate('/projects')}>
          ← Back to Projects
        </button>
        <div className={s.pagination}>
          <span>Previous</span>
          <span>Next</span>
        </div>
      </div>

      {/* ── hero banner ── */}
      <div className={s.banner} style={{ background: data.grad }}>
        <div className={s.bannerText}>
          <h1 className={s.bannerTitle}>
            {data.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className={s.bannerSub}>{data.subtitle}</p>
          <div className={s.bannerTags}>
            {data.tags.map(t => (
              <span key={t} className={s.bannerTag}>{t}</span>
            ))}
          </div>
        </div>
        <div className={s.bannerMockup} style={{ background: data.bannerGrad }}>
          <span className={s.bannerEmoji}>{data.emoji}</span>
        </div>
      </div>

      {/* ── body content ── */}
      <div className={s.body}>

        {/* Background */}
        <section className={s.section}>
          <h2 className={s.secTitle}>BACKGROUND</h2>
          <p className={s.text}>
            Me Cloud is a personal memory storage application that allows users to save, organize,
            and revisit their most precious memories through photos, notes, and mood boards.
            The goal was to design an intuitive, emotionally engaging experience that feels personal and warm.
          </p>
          <p className={s.text} style={{ marginTop: 12 }}>
            I began this project by exploring how people currently store memories — from physical
            journals to scattered phone galleries — and identified a gap for a focused, intentional memory app.
          </p>
        </section>

        {/* Quote */}
        <div className={s.quote}>
          "What if saving a memory felt as meaningful as the memory itself?"
        </div>

        {/* UX Research */}
        <section className={s.section}>
          <h2 className={s.secTitle}>UX RESEARCH</h2>

          <div className={s.researchCard}>
            <h3 className={s.cardH3}>📋 Survey — 24 responses</h3>
            <p className={s.text}>
              Conducted online survey targeting users aged 18–35.
              Key findings: 78% felt their memories were disorganized across multiple apps,
              65% wanted a single space to keep journal entries alongside photos.
            </p>
          </div>

          <div className={s.researchCard} style={{ background: 'var(--pink-light)', marginTop: 14 }}>
            <h3 className={s.cardH3}>👤 User Persona</h3>
            <div className={s.persona}>
              <div className={s.personaAvatar}>🙋‍♀️</div>
              <div>
                <h4 className={s.personaName}>Sara, 24 — University Student</h4>
                <p className={s.text}>
                  <strong>Goals:</strong> Keep memories organized by life chapter, share special moments.<br />
                  <strong>Frustrations:</strong> Photo gallery is cluttered, no emotional context for old memories.<br />
                  <strong>Quote:</strong> "I want to look back and actually <em>feel</em> something, not just see a photo."
                </p>
              </div>
            </div>
          </div>

          <div className={s.researchCard} style={{ marginTop: 14 }}>
            <h3 className={s.cardH3}>🗺️ User Journey Map</h3>
            <div className={s.journey}>
              {['Discover', 'Onboard', 'Add Memory', 'Organize', 'Revisit'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <div className={s.journeyStep}>
                    <span className={s.stepIcon}>
                      {['🔍','📥','📸','🗂️','✨'][i]}
                    </span>
                    <span className={s.stepLabel}>{step}</span>
                  </div>
                  {i < arr.length - 1 && <span className={s.journeyArrow}>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className={s.section}>
          <h2 className={s.secTitle}>DESIGN PROCESS</h2>
          <div className={s.processGrid}>
            {[
              { icon: '🖊', title: 'Wireframes', desc: 'Low-fidelity sketches exploring IA and core flows', bg: 'var(--pink-light)' },
              { icon: '🎨', title: 'Visual Design', desc: 'Color system, typography & component library in Figma', bg: 'var(--green-light)' },
              { icon: '🧪', title: 'Usability Testing', desc: 'Maze testing with 8 participants, 3 iterations', bg: 'var(--lilac)', opacity: 0.8 },
            ].map(item => (
              <div key={item.title} className={s.processCard} style={{ background: item.bg, opacity: item.opacity || 1 }}>
                <span className={s.processIcon}>{item.icon}</span>
                <h3 className={s.processTitle}>{item.title}</h3>
                <p className={s.processDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prototype */}
        <section className={s.section}>
          <h2 className={s.secTitle}>FINAL PROTOTYPE</h2>
          <div className={s.protoArea} style={{ background: data.grad }}>
            {['☁️', '📸', '✨'].map((e, i) => (
              <div key={i} className={s.protoPhone}>{e}</div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
