import React, {
  useRef, useEffect, useState, useCallback, createContext, useContext
} from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'

const C = {
  pink:   '#FF9AD2',
  pinkL:  '#FFF0F0',
  green:  '#D7FF80',
  greenD: '#557D00',
  dark:   '#2E0021',
  purple: '#9B7EC8',
  lilac:  '#C8ABFF',
  teal:   '#7ECEC4',
  coral:  '#FF7A7A',
  yellow: '#FFE566',
}

export const CursorContext = createContext({
  activeCategory: 'Skills',
  setCategory: () => {},
})
export const useCursor = () => useContext(CursorContext)

const STAMPS = {
  Skills: [
    { type: 'pill', label: 'UI/UX',     bg: C.purple, color: '#fff'   },
    { type: 'pill', label: 'HTML',      bg: C.green,  color: C.greenD },
    { type: 'pill', label: 'React',     bg: C.dark,   color: '#fff'   },
    { type: 'pill', label: 'CSS',       bg: C.lilac,  color: C.dark   },
    { type: 'pill', label: 'Figma',     bg: C.pink,   color: '#fff'   },
    { type: 'pill', label: 'Design',    bg: C.purple, color: '#fff'   },
    { type: 'pill', label: 'Research',  bg: C.green,  color: C.greenD },
    { type: 'pill', label: 'Prototype', bg: C.dark,   color: '#fff'   },
  ],
  Icons: [
    { type: 'icon', label: '✦', color: C.dark   },
    { type: 'icon', label: '✶', color: C.purple },
    { type: 'icon', label: '◎', color: C.pink   },
    { type: 'icon', label: '✦', color: C.green  },
    { type: 'icon', label: '◈', color: C.lilac  },
    { type: 'icon', label: '✸', color: C.dark   },
    { type: 'icon', label: '◉', color: C.purple },
    { type: 'icon', label: '✺', color: C.pink   },
  ],
  Shapes: [
    { type: 'shape', shape: 'circle',   bg: C.dark,   outline: false },
    { type: 'shape', shape: 'square',   bg: C.purple, outline: false },
    { type: 'shape', shape: 'triangle', bg: C.green,  outline: false },
    { type: 'shape', shape: 'circle',   bg: C.pink,   outline: true  },
    { type: 'shape', shape: 'diamond',  bg: C.lilac,  outline: false },
    { type: 'shape', shape: 'square',   bg: C.dark,   outline: true  },
    { type: 'shape', shape: 'triangle', bg: C.purple, outline: true  },
    { type: 'shape', shape: 'diamond',  bg: C.green,  outline: false },
  ],
  Vibes: [
    { type: 'pill', label: 'Creative',    bg: C.pink,   color: '#fff'   },
    { type: 'pill', label: 'Thoughtful',  bg: C.lilac,  color: C.dark   },
    { type: 'pill', label: 'Playful',     bg: C.yellow, color: C.dark   },
    { type: 'pill', label: 'Bold',        bg: C.dark,   color: '#fff'   },
    { type: 'pill', label: 'Curious',     bg: C.green,  color: C.greenD },
    { type: 'pill', label: 'Empathetic',  bg: C.purple, color: '#fff'   },
    { type: 'pill', label: 'Intentional', bg: C.teal,   color: '#fff'   },
    { type: 'pill', label: 'Expressive',  bg: C.coral,  color: '#fff'   },
  ],
}

function createStampEl(stamp) {
  const SIZE = 36
  const sw   = 2.5

  // ── ICON ──
  if (stamp.type === 'icon') {
    const el = document.createElement('div')
    el.style.cssText = `
      width: ${SIZE}px; height: ${SIZE}px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; color: ${stamp.color};
      user-select: none; line-height: 1;
    `
    el.textContent = stamp.label
    return el
  }

  // ── SHAPE (SVG) ──
  if (stamp.type === 'shape') {
    const fill   = stamp.outline ? 'none' : stamp.bg
    const stroke = stamp.bg

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width',   SIZE)
    svg.setAttribute('height',  SIZE)
    svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`)
    svg.style.display = 'block'

    let shape

    if (stamp.shape === 'circle') {
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      shape.setAttribute('cx', SIZE / 2)
      shape.setAttribute('cy', SIZE / 2)
      shape.setAttribute('r',  SIZE / 2 - sw)

    } else if (stamp.shape === 'square') {
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      shape.setAttribute('x',      sw)
      shape.setAttribute('y',      sw)
      shape.setAttribute('width',  SIZE - sw * 2)
      shape.setAttribute('height', SIZE - sw * 2)
      shape.setAttribute('rx',     3)
      shape.setAttribute('transform', `rotate(12, ${SIZE/2}, ${SIZE/2})`)

    } else if (stamp.shape === 'triangle') {
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
      shape.setAttribute('points', `${SIZE/2},${sw} ${SIZE-sw},${SIZE-sw} ${sw},${SIZE-sw}`)
      shape.setAttribute('stroke-linejoin', 'round')

    } else if (stamp.shape === 'diamond') {
      const h = SIZE / 2
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
      shape.setAttribute('points', `${h},${sw} ${SIZE-sw},${h} ${h},${SIZE-sw} ${sw},${h}`)
      shape.setAttribute('stroke-linejoin', 'round')
    }

    shape.setAttribute('fill',         fill)
    shape.setAttribute('stroke',       stroke)
    shape.setAttribute('stroke-width', sw)
    svg.appendChild(shape)

    const wrapper = document.createElement('div')
    wrapper.style.cssText = `
      width: ${SIZE}px; height: ${SIZE}px;
      display: flex; align-items: center; justify-content: center;
      user-select: none;
    `
    wrapper.appendChild(svg)
    return wrapper
  }

  // ── PILL ──
  const el = document.createElement('div')
  if (stamp.type === 'pill') {
    el.style.cssText = `
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0 14px; height: ${SIZE}px; border-radius: 100px;
      background: ${stamp.outline ? 'transparent' : stamp.bg};
      border: ${stamp.outline ? `2px solid ${stamp.bg}` : 'none'};
      color: ${stamp.color || '#fff'};
      font-family: var(--font-body); font-size: 11px; font-weight: 800;
      letter-spacing: 0.03em; white-space: nowrap;
      user-select: none; box-sizing: border-box;
    `
    el.textContent = stamp.label
  } else {
    // circle (Vibes용)
    el.style.cssText = `
      width: ${SIZE}px; height: ${SIZE}px; border-radius: 50%;
      background: ${stamp.outline ? 'transparent' : stamp.bg};
      border: ${stamp.outline ? `2px solid ${stamp.bg}` : 'none'};
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
      color: ${stamp.bg === C.green ? C.greenD : stamp.bg === C.yellow ? C.dark : '#fff'};
      user-select: none; font-weight: 700; box-sizing: border-box;
    `
    el.textContent = stamp.label
  }
  return el
}

function TrailSystem({ category, isActiveRef }) {
  const containerRef = useRef(null)
  const mouseRef     = useRef({ x: -500, y: -500 })
  const lastStampRef = useRef({ x: -500, y: -500 })
  const stampIdxRef  = useRef(0)

  const STAMP_DIST = 30
  const STAY_MS    = 800
  const FADE_MS    = 2500
  const NAV_H      = 56

  useEffect(() => {
    const onMove = e => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    let raf
    const stamps = STAMPS[category] || STAMPS.Skills

    const run = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const dx = mx - lastStampRef.current.x
      const dy = my - lastStampRef.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      const hovered = document.elementFromPoint(mx, my)
      const onButton = hovered?.closest('[data-cursor]')

      if (dist >= STAMP_DIST && isActiveRef.current && my > NAV_H) {
        const container = containerRef.current
        if (container) {
          const stamp = stamps[stampIdxRef.current % stamps.length]
          stampIdxRef.current++

          const wrapper = document.createElement('div')
          wrapper.style.cssText = `
            position: fixed; top: 0; left: 0;
            transform: translate(calc(${mx}px - 50%), calc(${my}px - 50%));
            pointer-events: none; z-index: 9997;
            opacity: 1; transition: opacity ${FADE_MS}ms ease;
          `
          wrapper.appendChild(createStampEl(stamp))
          container.appendChild(wrapper)
          lastStampRef.current = { x: mx, y: my }

          setTimeout(() => { wrapper.style.opacity = '0' }, STAY_MS)
          setTimeout(() => {
            if (container.contains(wrapper)) container.removeChild(wrapper)
          }, STAY_MS + FADE_MS)
        }
      }
      raf = requestAnimationFrame(run)
    }

    raf = requestAnimationFrame(run)
    return () => cancelAnimationFrame(raf)
  }, [category, isActiveRef])

  return <div ref={containerRef} />
}

function CursorDot() {
  const dotRef = useRef(null)
  const labelRef = useRef(null)
  
  useEffect(() => {
    let raf
    const m = { x: -400, y: -400 }
    const onMove = e => { m.x = e.clientX; m.y = e.clientY }

    const onEnter = e => {
      const label = e.target.closest('[data-cursor]')?.dataset.cursor
      if (label && labelRef.current) {
        labelRef.current.textContent = label
        labelRef.current.style.opacity = '1'
        labelRef.current.style.transform = 'translateY(0px)'
      }
    }
    const onLeave = e => {
      if (e.target.closest('[data-cursor]') && labelRef.current) {
        labelRef.current.style.opacity = '0'
        labelRef.current.style.transform = 'translateY(4px)'
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)

    const run = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(calc(${m.x}px - 50%), calc(${m.y}px - 50%))`
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${m.x}px`
        labelRef.current.style.top  = `${m.y - 28}px`
      }
      raf = requestAnimationFrame(run)
    }
    raf = requestAnimationFrame(run)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: 8, height: 8,
        background: '#2E0021', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999,
        willChange: 'transform',
      }} />
      <div ref={labelRef} style={{
        position: 'fixed', top: 0, left: 0,
        background: '#2E0021',
        color: 'white',
        fontSize: '10px',
        fontWeight: '700',
        padding: '3px 8px',
        borderRadius: '100px',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transform: 'translateY(4px)',
        transition: 'opacity 0.15s ease, transform 0.15s ease',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-body)',
      }} />
    </>
  )
}

export default function CursorSystem({ children }) {
  const location    = useLocation()
  const isHome      = location.pathname === '/'
  const isActiveRef = useRef(false)

  const [activeCategory, setActiveCategory] = useState('Skills')
  const [displayCat, setDisplayCat]         = useState('Skills')
  const timerRef = useRef(null)

  useEffect(() => {
    if (!isHome) {
      isActiveRef.current = false
      return
    }
    const t = setTimeout(() => {
      const hero = document.getElementById('hero')
      if (!hero) return
      const onEnter = () => { isActiveRef.current = true  }
      const onLeave = () => { isActiveRef.current = false }
      hero.addEventListener('mouseenter', onEnter)
      hero.addEventListener('mouseleave', onLeave)
      return () => {
        hero.removeEventListener('mouseenter', onEnter)
        hero.removeEventListener('mouseleave', onLeave)
      }
    }, 100)
    return () => clearTimeout(t)
  }, [isHome])

  useEffect(() => {
    if (activeCategory === displayCat) return
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDisplayCat(activeCategory)
    }, 50)
    return () => clearTimeout(timerRef.current)
  }, [activeCategory])

  const setCategory = useCallback((cat) => setActiveCategory(cat), [])

  return (
    <CursorContext.Provider value={{ activeCategory, setCategory }}>
      {children}
      {createPortal(
        <>
          <CursorDot />
          {isHome && (
            <TrailSystem
              key={displayCat}
              category={displayCat}
              isActiveRef={isActiveRef}
            />
          )}
        </>,
        document.body
      )}
    </CursorContext.Provider>
  )
}