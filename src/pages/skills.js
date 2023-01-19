import Image from 'next/image';
import React from 'react';

import { motion } from "framer-motion"
import styles from '../styles/Skills.module.css';

export default function Skills(props) {

  let Webdelay = 0;
  let deploymentDelay = 0;
  let otherDelay = 0;

  return (
    <>
    <div className={styles.container}>
      <section className={styles.skills_section}>
        <h2 className={styles.skills_title}>Web</h2>
        <div 
          className={styles.skills_section_cards}>
        {
          props.web.map((skill) => {
            Webdelay += 0.2;

            return (<>
              <motion.div 
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{delay: `${Webdelay}`}}
                className={styles.skill_section_cards_card}>
                <div 
                  style={{
                    border: `1px solid rgb(${skill.color})`, 
                    backgroundColor: `rgba(${skill.color}, 0.1)`}}
                  className={styles.skill_section_cards_card_icon}
                  >
                  <Image 
                    className={styles.skill_section_cards_card_img} 
                    src={skill.img} width='512' 
                    height='512' 
                    alt='Html logo'
                    />
                </div>
                <h3 
                  className={styles.skill_section_cards_card_title}
                  style={{color: `rgb(${skill.color})`}}
                  >{skill.name}
                </h3>
              </motion.div>
            </>)
          } 
            
          )
        }
        </div>
      </section>

      <section className={styles.skills_section}>
        <h2 className={styles.skills_title}>Deployment</h2>
        <div className={styles.skills_section_cards}>
        {
          props.deployment.map((skill) => {

            deploymentDelay += 0.2;

            return(
            <>
              <motion.div 
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{delay: `${deploymentDelay}`}}
                className={styles.skill_section_cards_card}>
                <div 
                  style={{
                    border: `1px solid rgb(${skill.color})`, 
                    backgroundColor: `rgba(${skill.color}, 0.1)`}}
                  className={styles.skill_section_cards_card_icon}
                  >
                  <Image 
                    className={styles.skill_section_cards_card_img} 
                    src={skill.img} width='512' 
                    height='512' 
                    alt='Html logo'
                    />
                </div>
                <h3 
                  className={styles.skill_section_cards_card_title}
                  style={{color: `rgb(${skill.color})`}}
                  >{skill.name}
                </h3>
              </motion.div>
            </>
          )
          }
          )
        }
        </div>
      </section>

      <section className={styles.skills_section}>
        <h2 className={styles.skills_title}>Other</h2>
        <div className={styles.skills_section_cards}>
        {
          props.other.map((skill) => {
            otherDelay += 0.2;

            return (
            <>
              <motion.div 
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{delay: `${otherDelay}`}}
                className={styles.skill_section_cards_card}>
                <div 
                  style={{
                    border: `1px solid rgb(${skill.color})`, 
                    backgroundColor: `rgba(${skill.color}, 0.1)`}}
                  className={styles.skill_section_cards_card_icon}
                  >
                  <Image 
                    className={styles.skill_section_cards_card_img} 
                    src={skill.img} width='512' 
                    height='512' 
                    alt='Html logo'
                    />
                </div>
                <h3 
                  className={styles.skill_section_cards_card_title}
                  style={{color: `rgb(${skill.color})`}}
                  >{skill.name}
                </h3>
              </motion.div>
            </>
          )
          })
        }
        </div>
      </section>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await import('/data/skills.json');
  const web = data.web;
  const deployment = data.deployment;
  const other = data.other

  return {
    props: {
      web,
      deployment,
      other
    }
  }
}