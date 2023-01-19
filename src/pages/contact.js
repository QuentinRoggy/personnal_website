import React from 'react'
import styles from '../styles/Contact.module.css';

export default function Contact() {
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
        </div>
    </div>
  </div>
  )
}
