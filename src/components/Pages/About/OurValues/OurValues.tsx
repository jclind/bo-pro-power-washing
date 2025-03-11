import React from 'react'
import styles from './OurValues.module.scss'
import { values } from '../../../../assets/data/values'
import ValuesList from '../../../Common/ValuesList'

const OurValues = () => {
  return (
    <div className={styles.our_values}>
      <div className='page__inner page__horizontal-spacing-2xl'>
        <div className={styles.content}>
          <h1 className={`${styles.mobile_title} page-title`}>
            Our Story, Our Values
          </h1>
          <div className={styles.image}>
            <img src='/images/about/buildings.svg' alt='' />
          </div>
          <div className={styles.text_section}>
            <h1 className={`${styles.desktop_title} page-title`}>
              Our Story, Our Values
            </h1>
            <div className={styles.paragraphs}>
              <p className='section-paragraph'>
                Bo Pro Power Washing was founded with one goal in mind: to help
                homeowners keep their properties looking clean and
                well-maintained. As a local business, we take pride in serving
                our neighbors with friendly service, expert care, and
                outstanding results.
              </p>
              <p className='section-paragraph'>
                We believe that quality work and great customer service go hand
                in hand. That's why we treat every home like it's our own—taking
                the time to do the job right and ensuring you're completely
                satisfied with the results. Whether it's showing up on time,
                using the best cleaning techniques, or paying attention to the
                little details, we're committed to delivering exceptional
                service every step of the way.
              </p>
            </div>

            <ValuesList spacing='small' align='left' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurValues
