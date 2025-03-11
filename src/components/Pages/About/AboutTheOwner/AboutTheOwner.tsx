import React from 'react'
import styles from './AboutTheOwner.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'

const AboutTheOwner = () => {
  return (
    <div className={styles.about_the_owner}>
      <div className='page__inner '>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src='images/about/headshot.svg' alt='owner headshot' />
          </div>
          <div className={styles.text_section}>
            <h1 className='section-title text-inverted'>Meet The Owner</h1>
            <div className={styles.paragraphs}>
              <p className='section-text text-inverted'>
                Hi, I’m Bo , the owner of Bo Pro Power Washing. I started this
                business because I love helping people take pride in their
                homes. Whether it's a driveway covered in dirt or siding that
                needs a refresh, I’m here to bring your property back to life
                with professional power washing services
              </p>
              <p className='section-text text-inverted'>
                Want to learn more about me or have any questions about Bo Pro
                Power Washing?
              </p>
            </div>
            <ButtonLink link='/contact' text="Let's Talk" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTheOwner
