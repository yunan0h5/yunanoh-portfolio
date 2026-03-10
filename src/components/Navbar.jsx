import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo} aria-label="Home">
        <svg 
          className={styles.star}
          viewBox="0 0 24 24" width="18" height="18" fill="white"
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z"/>
        </svg>
      </NavLink>

      <ul className={styles.links}>
        <li><NavLink to="/"         className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
        <li><NavLink to="/about"    className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink></li>
        <li><NavLink to="/gallery"  className={({ isActive }) => isActive ? styles.active : ''}>Gallery</NavLink></li>
      </ul>

      <div className={styles.spacer} />
    </nav>
  )
}
