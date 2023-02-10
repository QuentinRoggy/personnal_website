import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from './mobileNav.module.css';

export default function MobileNav() {

  const [activeMenu, setActiveTheme] = useState("false");
  const inactiveMenu = activeMenu === "true" ? "false" : "true";

  return (
    <div className={styles.mobileNav}>
      <button 
        onClick={() => setActiveTheme(inactiveMenu)}
        className={styles.theme_button}>
        {
          activeMenu === 'false' && 
        <Image
          className={styles.theme_button_img}
          src="https://www.svgrepo.com/show/499620/menu-burger.svg"
          alt='menu burger'
          width={20}
          height={20}
          />
        }
        {
          activeMenu === 'true' && 
          <>
            <Image
              className={styles.theme_button_img}
              src="https://www.svgrepo.com/show/491212/cross.svg"
              alt='menu burger'
              width={20}
              height={20}
            />
          </>
        }
      </button>
      {
        activeMenu === 'true' && 
          <div className={styles.nav}>
            <Link href='/' onClick={() => setActiveTheme(inactiveMenu)}>Home</Link>
            <Link href='/about' onClick={() => setActiveTheme(inactiveMenu)}>About me</Link>
            <Link href='/skills' onClick={() => setActiveTheme(inactiveMenu)}>Skills</Link>
            <Link href='/projects' onClick={() => setActiveTheme(inactiveMenu)}>Projects</Link>
            <Link href='/contact' onClick={() => setActiveTheme(inactiveMenu)}>Contact</Link>
          </div>
      }
    </div>
  )
}
