import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import s from './Projects.module.css'

const PROJECTS = [
  {
    id: 'apple-music',
    title: 'Apple Music Mobile App Re-Design',
    icon: '💎',
    emoji: '📱',
    img: '/images/apple-music-mockup.png',
    grad: 'linear-gradient(135deg,#FFE4F2,#FF9AD2)',
    type: 'Case Study',
    tags: [
      { label: 'UI/UX Design' },
      { label: 'App Re-Design' },
      { label: 'UX Research' },
      { label: 'Prototype' },
    ],
    tools: ['Figma', 'Photoshop'],
  },
  {
    id: 'me-cloud',
    title: 'Me-Cloud Mobile App Design',
    icon: '☁',
    emoji: '☁️',
    img: '/images/me-cloud-mockup.png',
    grad: 'linear-gradient(135deg,#C8ABFF,#9B7EC8)',
    type: 'Case Study',
    tags: [
      { label: 'UI/UX Design' },
      { label: 'Graphic Design' },
      { label: 'UX Research' },
      { label: 'Prototype' },
    ],
    tools: ['Figma', 'Illustrator', 'Maze'],
  },
  {
    id: 'to-dogether',
    title: 'To-Dogether Mobile App Design',
    emoji: '💌',
    img: '/images/to-dogether-mockup.png',
    grad: 'linear-gradient(135deg,#FFF0F0,#FF7A7A)',
    type: 'Case Study',
    tags: [
      { label: 'UI/UX Design' },
      { label: 'Graphic Design' },
      { label: 'UX Research' },
      { label: 'Prototype' },
    ],
    tools: ['Figma', 'Procreate'],
  },
  {
    id: 'comme-des-garcons',
    title: 'Comme Des Garcons Website Re-Design',
    icon: '💎',
    emoji: '🖤',
    img: '/images/commedesgarcons-mockup.png',
    grad: 'linear-gradient(135deg,#f5f5f5,#222)',
    type: 'Case Study',
    tags: [
      { label: 'UI/UX Design' },
      { label: 'Graphic Design' },
      { label: 'Web Development' },
      { label: 'UX Research' },
      { label: 'Prototype' },
    ],
    tools: ['Figma', 'HTML', 'CSS', 'Javascript', 'Photoshop', 'Procreate'],
  },
  {
    id: 'wip',
    title: 'Work In Progress!!',
    sub: 'coming soon!',
    wip: true,
  },
]

const FILTERS = [
  { label: 'All', icon: null },
  { label: 'Selected', icon: '★' },
  { label: 'Case Study', icon: '📋' },
]

const PARTICLES = ['★', '★', '☆', '✩', '★']
const COLORS = ['#FF9AD2', '#C8ABFF', '#D7FF80', '#FFB3D9', '#9B7EC8']

if (typeof document !== 'undefined' && !document.getElementById('burst-style')) {
  const style = document.createElement('style')
  style.id = 'burst-style'
  style.textContent = `
    @keyframes burst-fly {
      0%   { transform: translate(-50%, -50%) scale(0); opacity: 1; }
      40%  { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.1); opacity: 1; }
      100% { transform: translate(calc(-50% + var(--dx) * 1.1), calc(-50% + var(--dy) * 1.1)) scale(0); opacity: 0; }
    }
  `
  document.head.appendChild(style)
}

function spawnParticle(cx, cy, angle, dist, delay = 0) {
  const el = document.createElement('span')
  const symbol = PARTICLES[Math.floor(Math.random() * PARTICLES.length)]
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]
  const size = 6 + Math.random() * 10
  const dx = Math.cos((angle * Math.PI) / 180) * dist
  const dy = Math.sin((angle * Math.PI) / 180) * dist
  el.textContent = symbol
  el.style.cssText = `
    position: fixed;
    left: ${cx}px; top: ${cy}px;
    font-size: ${size}px; color: ${color};
    pointer-events: none; z-index: 99999;
    transform: translate(-50%, -50%) scale(0);
    animation: burst-fly 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards;
    --dx: ${dx}px; --dy: ${dy}px;
    text-shadow: 0 0 4px currentColor; font-weight: 900;
  `
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 400 + delay * 1000)
}

function burstList(cardEl) {
  const imgEl = cardEl.querySelector(`.${s.imgWrap}`)
  const rect = imgEl.getBoundingClientRect()
  const cx = rect.right
  const cy = rect.top + rect.height * 0.4
  for (let i = 0; i < 6; i++) {
    const angle = (Math.random() - 0.5) * 100
    const dist = 25 + Math.random() * 30
    spawnParticle(cx, cy, angle, dist, i * 0.015)
  }
}

function burstGrid(cardEl) {
  const rect = cardEl.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  for (let i = 0; i < 7; i++) {
    const angle = (360 / 7) * i
    const dist = 30 + Math.random() * 25
    spawnParticle(cx, cy, angle, dist, i * 0.015)
  }
}

export default function Projects() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewMode, setViewMode] = useState('list')
  const [visited, setVisited] = useState(() => {
    try { return JSON.parse(localStorage.getItem('visitedProjects') || '[]') }
    catch { return [] }
  })

  const handleClick = (e, p, mode) => {
    if (!p.wip) {
      const newVisited = [...new Set([...visited, p.id])]
      setVisited(newVisited)
      localStorage.setItem('visitedProjects', JSON.stringify(newVisited))
    }
    if (mode === 'grid') burstGrid(e.currentTarget)
    else burstList(e.currentTarget)
    setTimeout(() => {
      if (!p.wip) navigate(`/projects/${p.id}`)
    }, 500)
  }

  const filteredProjects = PROJECTS.filter(p => {
    if (p.wip) return activeFilter === 'All'
    if (activeFilter === 'All') return true
    if (activeFilter === 'Selected') return visited.includes(p.id)
    if (activeFilter === 'Case Study') return p.type === 'Case Study'
    return true
  })

  return (
    <div className={s.page}>
      <div className={s.pinkCol} />
      <div className={s.layout}>

        <aside className={s.sidebar}>
          <h1 className={s.sideTitle}>PROJECT</h1>
          <div className={s.viewToggle}>
            <button
              className={`${s.viewBtn} ${viewMode === 'list' ? s.viewActive : ''}`}
              onClick={() => setViewMode('list')}
            >☰</button>
            <button
              className={`${s.viewBtn} ${viewMode === 'grid' ? s.viewActive : ''}`}
              onClick={() => setViewMode('grid')}
            >⊞</button>
          </div>
          <ul className={s.filterList}>
            {FILTERS.map(f => (
              <li
                key={f.label}
                className={`${s.filterItem} ${activeFilter === f.label ? s.filterActive : ''}`}
                onClick={() => setActiveFilter(f.label)}
              >
                <span className={s.filterDot} />
                {f.icon && <span>{f.icon}</span>}
                {f.label}
              </li>
            ))}
          </ul>
        </aside>

        <main className={`${s.main} ${viewMode === 'grid' ? s.gridView : ''}`}>
          {filteredProjects.map(p => (
            <div
              key={p.id}
              className={`${s.card} ${viewMode === 'grid' ? s.cardGrid : ''}`}
              onClick={(e) => handleClick(e, p, viewMode)}
            >
              <div className={s.imgWrap}>
                {p.img ? (
                  <img src={p.img} alt={p.title} className={s.cardImg} />
                ) : (
                  <div className={s.wipPlaceholder}>
                    <div className={s.wipDots}>
                      <span className={s.wipDot} />
                      <span className={s.wipDot} />
                      <span className={s.wipDot} />
                    </div>
                  </div>
                )}
                {!p.wip && <span className={s.cardArrow}>&gt;&gt;&gt;</span>}
              </div>

              <div className={s.cardInfo}>
                <h2 className={s.cardTitle}>
                  {p.title}
                  {p.icon && <span className={s.cardIcon}>{p.icon}</span>}
                </h2>
                {p.sub && <p className={s.wipSub}>{p.sub}</p>}

                {(p.tags || p.tools || p.type) && (
                  <div className={s.tagGroups}>
                    {p.type && (
                      <div className={s.tagGroup}>
                        <span className={s.tagGroupLabel}>Type</span>
                        <div className={s.tags}>
                          <span className={`${s.tag} ${s.tagPink}`}>{p.type}</span>
                        </div>
                      </div>
                    )}
                    {p.tags && (
                      <div className={s.tagGroup}>
                        <span className={s.tagGroupLabel}>Skills</span>
                        <div className={s.tags}>
                          {p.tags.map(t => (
                            <span key={t.label} className={s.tag}>{t.label}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {p.tools && (
                      <div className={s.tagGroup}>
                        <span className={s.tagGroupLabel}>Tools</span>
                        <div className={s.tags}>
                          {p.tools.map(tool => (
                            <span key={tool} className={`${s.tag} ${s.tagGreen}`}>{tool}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className={s.empty}>
              <p>Your viewed projects will show up here ✦</p>
            </div>
          )}
        </main>

      </div>
      <Footer />
    </div>
  )
}