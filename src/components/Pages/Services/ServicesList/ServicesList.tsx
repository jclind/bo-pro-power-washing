import React from 'react'
import styles from './ServicesList.module.scss'
import { servicesList } from './servicesList'
import { ButtonLink } from '../../../Common/ButtonLink'

const ServicesList = () => {
  return (
    <div className={styles.services_list}>
      <div className='page__inner page__horizontal-spacing-xl'>
        <div className={styles.content}>
          <div className={styles.services}>
            {servicesList.map(service => (
              <div className={`${styles.service} card`} key={service.title}>
                <div className={styles.image}>
                  <img src={service.img} alt='' />
                </div>
                <div className={styles.text_section}>
                  <h2>{service.title}</h2>
                  <div className={styles.divider}></div>
                  <p className='section-paragraph'>{service.description}</p>
                  <ButtonLink text='Get A Free Quote' link='/contact' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesList
