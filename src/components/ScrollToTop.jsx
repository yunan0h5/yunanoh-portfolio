import React, { useState, useEffect } from 'react'
import s from './ScrollToTop.module.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const windowH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      const footerH = 160

      const pastTop = scrollY > 300
      const beforeFooter = scrollY + windowH < docH - footerH

      setVisible(pastTop && beforeFooter)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className={`${s.wrap} ${visible ? s.visible : ''}`} onClick={scrollUp}>
      <span className={s.label}>go to top!</span>
      <button className={s.btn} aria-label="Scroll to top">
        <span className={s.star}>✦</span>
      </button>
    </div>
  )
}