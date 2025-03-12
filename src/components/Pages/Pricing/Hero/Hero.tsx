import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className='page__inner page__horizontal-spacing-2xl'>
        <div className={styles.content}>
          <h1 className='page-title'>How We Determine Pricing</h1>
          <p className='section-paragraph'>
            At Bo Pro Power Washing, we provide customized pricing based on the
            size, condition, and specific cleaning needs of your property. Our
            jobs typically <strong>start at $150</strong>, and we always offer
            free, no-obligation estimates so you know exactly what to expect
            before we begin.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
