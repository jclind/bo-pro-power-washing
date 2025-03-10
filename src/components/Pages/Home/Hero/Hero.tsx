import React from 'react'
import styles from './Hero.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'
const Hero = () => {
  return (
    <div className={`${styles.hero} page__horizontal-spacing-2xl`}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='page-title'>Bring Back the Shine to Your Home</h1>
          <p className='section-paragraph'>
            Your home's exterior is the first thing people notice—make it count!
            Bo Pro Power Washing offers professional cleaning services for{' '}
            <strong>driveways, decks, siding,</strong> and{' '}
            <strong>sidewalks</strong> in Cranberry Township and beyond. With a
            commitment to quality and customer satisfaction, we're here to make
            your property shine. Starting at just $150 per job!
          </p>
          <div className={styles.buttons}>
            <ButtonLink
              text='Schedule a Free Estimate'
              link='/contact'
              color='tertiary'
              size='large'
            />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src='/images/home/hero.webp' />
      </div>
    </div>
  )
}

export default Hero
