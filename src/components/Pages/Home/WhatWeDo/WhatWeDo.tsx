import React from 'react'
import styles from './WhatWeDo.module.scss'
import { services } from './services'
import { ButtonLink } from '../../../Common/ButtonLink'

const WhatWeDo = () => {
  return (
    <div className={styles.what_we_do}>
      <div className='page__inner page__horizontal-spacing-3xl'>
        <div className={styles.content}>
          <h1 className='section-title'>What We Do</h1>
          <p className='section-paragraph'>
            At Bo Pro Power Washing, we provide reliable, efficient, and
            professional cleaning services to keep your home looking its best.
            From driveways to siding, we offer a range of options to fit your
            needs.
          </p>
          <div className={styles.services}>
            {services.map(service => (
              <div className={`${styles.service} card`}>
                <div className={styles.service_icon}>
                  <service.icon className={styles.icon} />
                </div>
                <div className={styles.text}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <ButtonLink
            text='See All Services'
            link='/services'
            color='tertiary'
            size='large'
          />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
