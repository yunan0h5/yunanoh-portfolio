import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCursor } from '../components/CursorSystem.jsx'
import Footer from '../components/Footer.jsx'
import s from './Home.module.css'

const CATEGORIES = ['Skills', 'Icons', 'Shapes', 'Vibes']

const PREVIEW_PROJECTS = [
  {
    id: 'apple-music',
    title: 'Apple Music Mobile App Redesign',
    sub: 'UI/UX Design',
    img: '/images/apple-music-mockup.png',
    rotate: '-3deg',
  },
  {
    id: 'me-cloud',
    title: 'Me Cloud Mobile App Design',
    sub: 'UI/UX Design',
    img: '/images/me-cloud-mockup.png',
    rotate: '2deg',
  },
  {
    id: 'to-dogether',
    title: 'To-Dogether Mobile App Design',
    sub: 'UI/UX Design',
    img: '/images/to-dogether-mockup.png',
    rotate: '-2deg',
  },
]

const TAGS = [
  { label: 'Creative',        bg: '#FF9AD2', color: '#fff',    rot: '-6deg' },
  { label: 'Thoughtful',      bg: '#C8ABFF', color: '#2E0021', rot: '4deg'  },
  { label: 'Detail-oriented', bg: '#D7FF80', color: '#557D00', rot: '-3deg' },
  { label: 'Empathetic',      bg: '#2E0021', color: '#fff',    rot: '6deg'  },
  { label: 'Playful',         bg: '#FF9AD2', color: '#fff',    rot: '-5deg' },
  { label: 'Bold',            bg: '#9B7EC8', color: '#fff',    rot: '3deg'  },
  { label: 'Curious',         bg: '#7ECEC4', color: '#fff',    rot: '-4deg' },
]

export default function Home() {
  const navigate = useNavigate()
  const { activeCategory, setCategory } = useCursor()

  return (
    <div className={s.page}>

      {/* ── HERO ── */}
      <section id="hero" className={`${s.hero} grid-bg`}>
        <aside className={s.leftPanel}>
          <ul className={s.catList}>
            {CATEGORIES.map(cat => (
              <li
                key={cat}
                className={`${s.catItem} ${activeCategory === cat ? s.catActive : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <main className={s.heroMain}>
          <a href="/files/yuna-noh-resume.pdf" target="_blank" rel="noreferrer" className={`${s.bubble} ${s.bubbleA}`} data-cursor="Resume">
            Resume 📄
          </a>
          <a href="mailto:yujeongn0h5@gmail.com" className={`${s.bubble} ${s.bubbleB}`} data-cursor="Email">
            Email ✉
          </a>
          <p className={s.cursorHint}>✦ try moving your cursor!</p>
          <div className={s.heroType}>
            <span className={s.designerLine}>DESIGNER</span>
            <span className={s.nameLine}>YUNA NOH</span>
            <div className={s.heroSub}>
              <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#FF9AD2" strokeWidth="1.5"/>
                <circle cx="6" cy="6" r="2" fill="#FF9AD2"/>
              </svg>
              <p>Creative UI/UX Designer<br />Based <i></i>n Vancouver, Canada</p>
            </div>
          </div>
          <p className={s.scrollHint}>scroll ↓</p>
        </main>
      </section>

      <div className={s.gradientBg}>

        {/* ── KEY PROJECTS ── */}
        <section className={s.projectsSection}>
          <h2 className={s.sectionTitle}>KEY PROJECTS</h2>
          <p className={s.sectionSub}>Explore my key projects!</p>
          <div className={s.cardRow}>
            {PREVIEW_PROJECTS.map((p, i) => (
              <div
                key={p.id}
                className={s.card}
                style={{ transform: `rotate(${p.rotate})`, zIndex: i === 1 ? 3 : 1 }}
                onClick={() => navigate(`/projects/${p.id}`)}
              >
                <div className={s.cardTop}>
                  <div>
                    <h3 className={s.cardTitle}>{p.title}</h3>
                    <p className={s.cardSub}>{p.sub}</p>
                  </div>
                  <span className={s.cardArrow}>&gt;&gt;&gt;</span>
                </div>
                <div className={s.cardImg}>
                  <img src={p.img} alt={p.title} />
                </div>
                <div className={s.cardOverlay}>
                  <p className={s.overlayTitle}>{p.title}</p>
                  <p className={s.overlaySub}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={s.exploreMore} onClick={() => navigate('/projects')}>
            Click to explore more! &gt;&gt;
          </p>
        </section>

        {/* ── ABOUT BANNER ── */}
        <section className={s.aboutBanner}>

          {/* Background Shapes */}
          <svg className={s.bgShapes} viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="280" r="200" fill="rgba(255,154,210,0.15)" />
            <circle cx="1100" cy="300" r="160" fill="rgba(200,171,255,0.18)" />
            <circle cx="600" cy="500" r="70" fill="none" stroke="rgba(255,154,210,0.25)" strokeWidth="3" />
            <circle cx="420" cy="80" r="16" fill="rgba(255,154,210,0.4)" />
            <circle cx="820" cy="120" r="10" fill="rgba(215,255,128,0.5)" />
            <rect x="950" y="380" width="34" height="34" rx="5" fill="rgba(255,154,210,0.25)" transform="rotate(20 967 397)" />
          </svg>

          {/* 떠다니는 장식 */}
          <span className={s.bannerSparkle}>✦</span>
          <span className={s.deco1}>✶</span>
          <span className={s.deco2}>◆</span>

          {/* 왼쪽 — 사진 프레임 (삐져나오는 효과) */}
          <div className={s.photoWrap}>
            {/* 뒤 장식 카드 */}
            <div className={s.photoCardBack} />

            {/* 프레임 박스 */}
            <div className={s.photoFrame}>
              {/* 이미지가 프레임 밖으로 삐져나옴 */}
              <img
                src="/images/yuna.png"
                alt="Yuna Noh"
                className={s.photoImg}
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={s.bannerContent}>
            <h1 className={s.bannerName}>YUNA NOH</h1>
            <p className={s.bannerDesc}>
              A <strong>UI/UX designer</strong> with a passion for
              crafting intuitive, visually engaging experiences. Always curious,
              always creating — turning ideas into interfaces that feel just right.
            </p>

            <div className={s.bannerContact}>
              <a href="yujeongn0h5@gmail.com" className={s.contactItem}data-cursor="Email">
                <span>✉</span> yujeongn0h5@gmail.com
              </a>
              <a href="www.linkedin.com/in/yuna-noh-41a6623b4" target="_blank" rel="noreferrer" className={s.contactItem} data-cursor="Linkedin">
                <span>🔗</span> linkedin/yunanoh
              </a>
            </div>

            <div className={s.bannerTags}>
              {TAGS.map(tag => (
                <span
                  key={tag.label}
                  className={s.bannerTag}
                  style={{ background: tag.bg, color: tag.color, transform: `rotate(${tag.rot})` }}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <p className={s.bannerMore} onClick={() => navigate('/about')}>
              More about me! &gt;&gt;
            </p>
          </div>

        </section>

        <Footer />
      </div>
    </div>
  )
}