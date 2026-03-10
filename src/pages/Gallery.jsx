import React, { useState } from 'react'
import s from './Gallery.module.css'

const FOLDERS = [
  // 왼쪽
  { color: 'pink',  title: 'Branding',     hint: 'peek inside ✦',   x: 11, y: 8,  rot: -5, delay: 0,   dur: 4.2 },
  { color: 'green', title: 'Typography',   hint: 'open me up :)',    x: 5,  y: 34, rot:  6, delay: 0.5, dur: 4.6 },
  { color: 'pink',  title: 'UI Design',    hint: 'something nice~',  x: 18, y: 52, rot: -3, delay: 0.8, dur: 4.4 },
  { color: 'green', title: 'Motion',       hint: 'click & see ✦',   x: 26, y: 18, rot:  2, delay: 0.6, dur: 4.1 },
  { color: 'pink',  title: 'Print',        hint: 'something nice~',  x: 9,  y: 66, rot: -6, delay: 0.2, dur: 4.3 },
  // 오른쪽
  { color: 'green', title: 'Photography',  hint: 'memories :)',      x: 76, y: 8,  rot:  4, delay: 0.3, dur: 4.3 },
  { color: 'pink',  title: 'Packaging',    hint: 'unwrap me~',       x: 84, y: 30, rot: -3, delay: 0.7, dur: 4.8 },
  { color: 'green', title: 'Illustration', hint: 'peek inside ✦',   x: 78, y: 56, rot:  2, delay: 0.4, dur: 4.5 },
  { color: 'pink',  title: 'Web Design',   hint: 'open me up :)',    x: 64, y: 14, rot: -4, delay: 1.0, dur: 4.7 },
]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)
  const [popped,  setPopped]  = useState(null)

  const handleClick = (i) => {
    setPopped(i)
    setTimeout(() => setPopped(null), 500)
  }

  return (
    <div className={s.page}>
      <p className={s.welcome}>Welcome to Yuna's Design Gallery!</p>
      <p className={s.hint}>Click anything. Have fun :)</p>

      <div className={s.headline}>
        <h1 className={s.headlineText}>
          WHAT IS<br />
          READY??<br />
          CLICK.<br />
          CREATE!
        </h1>
      </div>

      <div className={s.folderField}>
        {FOLDERS.map((f, i) => (
          <div
            key={i}
            className={`${s.folder} ${popped === i ? s.folderPop : ''}`}
            style={{
              left: `${f.x}%`,
              top:  `${f.y}%`,
              '--base-rot': `${f.rot}deg`,
              '--dur':      `${f.dur}s`,
              '--delay':    `${f.delay}s`,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(i)}
          >
            <div className={s.folderImgWrap}>
              <img
                src={`/images/folder-${f.color}.png`}
                alt={f.title}
                className={s.folderImg}
              />
            </div>

            <div className={`${s.folderHint} ${hovered === i ? s.folderHintVisible : ''}`}>
              {f.hint}
            </div>

            <p className={s.folderTitle}>{f.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}