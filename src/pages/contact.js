import React from 'react'
import styles from '../styles/Contact.module.css';
import { motion } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';

export default function Contact(props) {
  console.log(props.socialMedia);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.contact_container}>
        <div className={styles.mail_container}>
          <h2>EMAIL</h2>
          <div className={styles.form_container}>
            <form action='https://formbold.com/s/3VbO3' method='POST'>
              <div>
                <input type='text' name='name' id='' placeholder='Votre nom' className={styles.name_input} />
                <input type='text' name='email' id='' placeholder='Votre Email' className={styles.email_input} />
              </div>
              <input type='text' name='subject' id='' placeholder='Sujet' className={styles.subject_input}/>
              <input type='textarea' name='message' id='' placeholder='Message' className={styles.message_input}/>
              <input type='submit' name='message' id='' value='Envoyer' className={styles.submit_button}/>
            </form>
          </div>
        </div>
        <div className={styles.socia_mdedia_container}>
          <h2>SOCIAL MEDIA</h2>
          <div className={styles.social_media_list}>
            {
              props.socialMedia.map((media) => (
                  <>
                  <Link href={media.url} target='_blank'>
                    <motion.div

                      key={media.id}
                      initial={{ opacity: 0, translateY: 20 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{delay: 1}}
                      className={styles.contact_section_cards_card}>
                      <div 
                        style={{
                          border: `1px solid rgb(${media.color})`, 
                          backgroundColor: `rgba(${media.color}, 0.1)`}}
                        className={styles.contact_section_cards_card_icon}
                        >
                        <Image 
                          className={styles.contact_section_cards_card_img} 
                          src={media.img} width='512' 
                          height='512' 
                          alt='Html logo'
                          />
                      </div>
                      <h3 
                        className={styles.contact_section_cards_card_title}
                        style={{color: `rgb(${media.color})`}}
                        >{media.name}
                      </h3>
                    </motion.div>
                  </Link>
                  </>
                )
              )
            }
          </div>
        </div>
    </div>
  </div>
  )
}

export async function getStaticProps() {
  const data = await import('/data/socialMedia.json');
  const socialMedia = data.socialMedia;

  console.log(socialMedia);

  return {
    props: {
      socialMedia
    }
  }
}