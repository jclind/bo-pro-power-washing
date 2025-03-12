import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className='page__inner page__horizontal-spacing-2xl'>
        <div className={styles.content}>
          <h1 className='page-title'>Our Services</h1>
          <p className='section-paragraph'>
            Bo Pro Power Washing provides expert pressure washing services in
            Cranberry Township, PA, helping homeowners maintain a clean,
            beautiful property. From driveways to decks, our professional
            cleaning removes dirt, grime, and mildew, restoring your home’s curb
            appeal. See how we can help below!
          </p>
          <div className={styles.background_image}>
            <img src='/images/services/stars.webp' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
