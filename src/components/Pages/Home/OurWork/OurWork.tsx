import React from 'react'
import styles from './OurWork.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'

const OurWork = () => {
  return (
    <div className={styles.our_work}>
      <div className='page__inner page__horizontal-spacing-2xl'>
        <div className={styles.content}>
          <h1>Our Work</h1>
          <div className={styles.images_container}>
            <div className={styles.before}>
              <div className={styles.image}>
                <h2>BEFORE</h2>
                <img
                  src='/images/home/example-before.webp'
                  alt='dirty deck stairs'
                />
              </div>
            </div>
            <div className={styles.after}>
              <div className={styles.image}>
                <h2>AFTER</h2>
                <img
                  src='/images/home/example-after.webp'
                  alt='clean deck stairs'
                />
              </div>
            </div>
          </div>
          <ButtonLink text='See All Projects' link='/projects' />
        </div>
      </div>
    </div>
  )
}

export default OurWork
