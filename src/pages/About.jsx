import React, { useState } from 'react'
import Footer from '../components/Footer.jsx'
import s from './About.module.css'

const SKILL_GROUPS = {
  'Design': [
    { label: 'UI Design',         bg: 'linear-gradient(135deg,#FFB3D9,#FF9AD2)', icon: '✏️' },
    { label: 'UX Design',         bg: 'linear-gradient(135deg,#C8ABFF,#9B7EC8)', icon: '🔍' },
    { label: 'Mobile App Design', bg: 'linear-gradient(135deg,#FFD6EC,#FFB3D9)', icon: '📱' },
    { label: 'Web Design',        bg: 'linear-gradient(135deg,#D7FF80,#B8E860)', icon: '🌐' },
    { label: 'Wireframing',       bg: 'linear-gradient(135deg,#E8E8E8,#D0D0D0)', icon: '⬜' },
    { label: 'Prototyping',       bg: 'linear-gradient(135deg,#FFE4B5,#FFD080)', icon: '⚡' },
  ],
  'UX': [
    { label: 'User Research',      bg: 'linear-gradient(135deg,#C8ABFF,#9B7EC8)', icon: '👥' },
    { label: 'User Flows',         bg: 'linear-gradient(135deg,#FFB3D9,#FF9AD2)', icon: '🔀' },
    { label: 'Interaction Design', bg: 'linear-gradient(135deg,#D7FF80,#B8E860)', icon: '🖱️' },
  ],
  'Tools': [
    { label: 'Figma',         bg: 'linear-gradient(135deg,#FF7262,#F24E1E)', icon: '🎨' },
    { label: 'Photoshop',     bg: '#001E36',                                  icon: 'Ps' },
    { label: 'Illustrator',   bg: '#FF7300',                                  icon: 'Ai' },
    { label: 'InDesign',      bg: '#49021F',                                  icon: 'Id' },
    { label: 'Premiere Pro',  bg: '#00005B',                                  icon: 'Pr' },
    { label: 'After Effects', bg: '#1a0533',                                  icon: 'Ae' },
    { label: 'Procreate',     bg: 'linear-gradient(135deg,#1a1a2e,#16213e)',  icon: '✍️' },
    { label: 'Canva',         bg: 'linear-gradient(135deg,#00C4CC,#7D2AE8)',  icon: '✂️' },
  ],
  'Front-End': [
    { label: 'HTML',       bg: '#E44D26',                                 icon: '5'   },
    { label: 'CSS',        bg: '#264DE4',                                 icon: 'CSS' },
    { label: 'JavaScript', bg: '#F7DF1E',                                 icon: 'JS'  },
    { label: 'React',      bg: 'linear-gradient(135deg,#61DAFB,#282c34)', icon: '⚛'  },
  ],
}

export default function About() {
  const [activeSkillCat, setActiveSkillCat] = useState('Design')

  return (
    <div className={s.page}>

      <div className={s.topHeroWrap}>
        <div className={s.gridBg} />

        {/* ── 상단 — 콜라주 + 타이틀/intro ── */}
        <section className={s.top}>
          <div className={s.collageWrap}>
            <div className={`${s.photoCard} ${s.photo1}`}>
              <img src="/images/about-1.png" alt="" className={s.photoImg} />
            </div>
            <div className={`${s.photoCard} ${s.photo2}`}>
              <img src="/images/about-2.png" alt="" className={s.photoImg} />
            </div>
            <div className={`${s.photoCard} ${s.photo3}`}>
              <img src="/images/about-3.png" alt="" className={s.photoImg} />
            </div>
            <span className={s.star1}>✦</span>
            <span className={s.star2}>✦</span>
            <span className={s.star3}>✦</span>
            <span className={s.star4}>✦</span>
            <div className={s.dot1} /><div className={s.dot2} /><div className={s.dot3} />
            <div className={s.line1} /><div className={s.line2} /><div className={s.line3} />
            <span className={s.decoStar1}>✦</span>
            <span className={s.decoStar2}>✦</span>
            <span className={s.decoStar3}>✦</span>
          </div>

          <div className={s.topText}>
            <h1 className={s.title}>ABOUT YUNA</h1>
            <p className={s.introInline}>
              <strong>Hello, I'm Yuna Noh.</strong><br />
              I'm currently studying New Media Design and Web Development at BCIT in Vancouver.<br />
              I like to add a touch of humour to a clean design.<br />
              Neat and tidy is nice, but it feels more charming when there's a small, unexpected twist.<br />
              <em>That unexpected detail is my style!</em>
            </p>
          </div>
        </section>

        {/* ── 하단 — 텍스트 + 오른쪽 콜라주 ── */}
        <section className={s.hero}>
          <div className={s.textBlock}>
            <p className={s.para}>
              Leaving the comfort of my family in Korea and
              moving to Canada made me realize how beautifully diverse the world is.
              I found it fascinating how people with different backgrounds, voices, tastes, and
              perspectives all shape the world in their own unique ways.
              Since then, I've been drawn to designs that highlight individuality in a subtle, beautiful way.
              They don't need to be flashy. I love creating work that makes people pause and think,
              "Oh, this feels a bit different."
            </p>
            <p className={s.para}>
              I enjoy seeing ordinary moments reborn with a new vibe through my designs.
              For me, design isn't just the result. It's how I see and interpret the world.
              I want to continue creating work that looks good, but also delights people and prompts
              them to think for a moment, all at the same time.
            </p>
          </div>

          <div className={s.collageWrap2}>
            <div className={`${s.photoCard} ${s.photo4}`}>
              <img src="/images/about-4.png" alt="" className={s.photoImg} />
            </div>
            <div className={`${s.photoCard} ${s.photo5}`}>
              <img src="/images/about-5.png" alt="" className={s.photoImg} />
            </div>
            <div className={`${s.photoCard} ${s.photo6}`}>
              <img src="/images/about-6.png" alt="" className={s.photoImg} />
            </div>
            <div className={`${s.photoCard} ${s.photo7}`}>
              <img src="/images/about-7.png" alt="" className={s.photoImg} />
            </div>
            <span className={s.star5}>✦</span>
            <span className={s.star6}>✦</span>
            <div className={s.dot4} /><div className={s.dot5} />
            <span className={s.decoStar4}>✦</span>
            <span className={s.decoStar5}>✦</span>
            <span className={s.decoStar6}>✦</span>
            <span className={s.decoStar7}>✦</span>
          </div>
        </section>

      </div>

      {/* ── SKILLS ── */}
      <section className={s.skills}>
        <div className={s.skillsLeft}>
          <span className={s.skillsBigStar}>✦</span>
          <span className={s.skillsMidStar}>✦</span>
          <span className={s.skillsSmStar}>✦</span>
          <h2 className={s.skillsTitle}>MY<br/>SKILLS</h2>
          <div className={s.skillsTabs}>
            {Object.keys(SKILL_GROUPS).map(cat => (
              <button
                key={cat}
                className={`${s.skillsTab} ${activeSkillCat === cat ? s.skillsTabActive : ''}`}
                onClick={() => setActiveSkillCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={s.skillsPills}>
          {SKILL_GROUPS[activeSkillCat].map(item => (
            <div key={item.label} className={s.skillRow}>
              <div className={s.skillThumb} style={{ background: item.bg, color: 'white' }}>
                <span className={['Ps','Ai','5','CSS','JS','Id','Pr','Ae'].includes(item.icon) ? s.skillThumbMono : s.skillThumbEmoji}>
                  {item.icon}
                </span>
              </div>
              <div className={s.skillPill}>
                <span className={s.skillLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={s.videoArea}>
        <p>add video / showreel here 🎬</p>
      </div>

      <Footer />
    </div>
  )
}