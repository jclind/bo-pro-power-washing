import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className='page__inner hero-page'>
        <h1 className='hero-title'>Past Projects</h1>
        <p className='hero-description'>
          Check out our past work for our loyal clients!
        </p>
      </div>
    </div>
  )
}

export default Hero
