import React from 'react'
import styles from './WhyChooseUs.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'
import ValuesList from '../../../Common/ValuesList'

const WhyChooseUs = () => {
  return (
    <div className={styles.why_choose_us}>
      <div className='page__inner page__horizontal-spacing-3xl'>
        <div className={styles.content}>
          <div className={styles.top_section}>
            <div className={styles.text_section}>
              <h1 className='section-title'>
                Why Choose Bo Pro Power Washing?
              </h1>
              <p className='section-paragraph'>
                As a locally owned business with low overhead, we offer
                high-quality power washing at competitive prices. We use safe,
                professional-grade equipment to ensure your home looks its best,
                and we don't consider a job done until you're fully satisfied.
                With direct communication with the owner, you'll always receive
                personalized service and transparent pricing with no hidden
                fees.
              </p>
            </div>
            <div className={styles.image}>
              <img
                src='/images/shared/brick-pressure-wash-large.webp'
                alt='person power washing sidewalk'
              />
            </div>
          </div>
          <ValuesList />
          <ButtonLink text="Let's Get Started" link='/services' size='large' />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
