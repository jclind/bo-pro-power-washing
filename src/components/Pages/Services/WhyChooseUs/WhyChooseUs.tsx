import React from 'react'
import styles from './WhyChooseUs.module.scss'
import ValuesList from '../../../Common/ValuesList'

const WhyChooseUs = () => {
  return (
    <div className={styles.why_choose_us}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='section-title text-inverted'>Why Choose Bo Pro?</h1>
          <div className={styles.values_container}>
            <ValuesList border={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
