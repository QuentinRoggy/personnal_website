import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

import styles from '../styles/About.module.css';

import photo from '../../public/images/Quentin.jpeg';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me</h1>
      <div className={styles.about_container}>

        <motion.div 
          className={styles.about_description_container}
          initial={{ opacity: 0, translateX: -500 }} 
          whileInView={{ opacity: 1, translateX: 0, transition: {duration: 0.8} }}>

          <p className={styles.about_description}>
          Hey, my name is Quentin ROGGY. I am a fullstack developer and web integrator from Angers, I’m passionate about creating beautiful, intuitive and functionnal web app and websites. I&apos;m available as freelance in Angers, Paris and Nantes. Of course full remote also possible.</p>
          <p className={styles.about_description}>
          Passionate about web development, I offer you a support from the conception to the realization of your projects. Naturally involved in my work and concerned about the aesthetic and ergonomic rendering of your application, I am a force of proposal to offer you solutions to improve the user experience.</p>
          <p className={styles.about_description}>
          My skills allow me to propose you services of creation of web application, MVP, showcase site or e-commerce.
          I also worked for 15 years in the industrial field as a project manager and workshop manager. I would be happy to work with you on your digitalization solutions for your production tools.</p>

          <div className={styles.contact_container}>
            <Link className={styles.contact_link} href='/contact' >
              <Image 
                className={styles.arrow} 
                src="https://www.svgrepo.com/show/466032/right-arrow.svg" 
                alt="right arrow"
                width={24}
                height={24}
                />
                <span>Contact me</span>
              </Link>

          </div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, translateX: 500 }} 
          whileInView={{ opacity: 1, translateX: 0, transition: {duration: 0.8} }}
          className={styles.about_img_container}>
          <Image className={styles.about_img} src={photo} alt='photo portrait' width={2074} height={2054}/>
        </motion.div>

      </div>
    </div>
  )
}
