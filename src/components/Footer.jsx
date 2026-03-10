import React from 'react'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>

      {/* GET iN TOUCH */}
        <div className={s.titleImgWrap}>
          <img src="/images/footer-text.png" alt="GET iN TOUCH" className={s.titleImg} />
          <span className={s.starFloat}>★</span>
        </div>

      {/* Email button */}
      <div className={s.emailWrap}>
        <span className={s.emailText}>CONTACT@YUNANOH.CA</span>
        <a href="mailto:yujeongn0h5@gmail.com" className={s.emailIconBtn} data-cursor="Email">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <rect x="0.9" y="0.9" width="18.2" height="14.2" rx="2.5" stroke="rgba(255,154,210,0.9)" strokeWidth="1.6"/>
            <path d="M1 3.5l9 6.5 9-6.5" stroke="rgba(255,154,210,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </a>
      </div>

      {/* Bottom Bar */}
      <div className={s.bottomBar}>
        <p className={s.copy}>
          Designed & Developed by Yuna | Built by React and Love💕 | ©2026 all rights reserved
        </p>
        <div className={s.links}>
          <a href="https://www.linkedin.com/in/yuna-noh-41a6623b4" target="_blank" rel="noreferrer" className={s.link} data-cursor="Linkedin">
            Linkedin
          </a>
          <a href="/files/yuna-noh-resume.pdf" target="_blank" rel="noreferrer" className={s.link} data-cursor="Resume">
            Resume
          </a>
        </div>
      </div>

    </footer>
  )
}