import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import styles from './Header.module.css';

export default function Header() {

  const [activeTheme, setActiveTheme] = useState("dark");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <div className={styles.container}>
      <h1>Quentin Roggy</h1>
        <button 
        onClick={() => setActiveTheme(inactiveTheme)}
        className={styles.theme_button}>
        {
          activeTheme === 'light' && 
        <Image
          className={styles.theme_button_img}
          src="https://www.svgrepo.com/show/490871/moon.svg"
          alt='theme'
          width={20}
          height={20}
          />
        }
        {
          activeTheme === 'dark' && 
        <Image
          className={styles.theme_button_img}
          src="https://www.svgrepo.com/show/487852/sun.svg"
          alt='theme'
          width={20}
          height={20}
          />
        }
      </button>
    </div>
  )
}
