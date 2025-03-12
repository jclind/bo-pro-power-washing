import React from 'react'
import styles from './PricingGuide.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'

const PricingGuide = () => {
  return (
    <div className={styles.pricing_guide}>
      <div className='page__inner page__horizontal-spacing-xl'>
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              src='/images/shared/brick-pressure-wash-large.webp'
              alt='person power washing brick'
            />
          </div>
          <div className={styles.text_section}>
            <div className={styles.pricing_factors}>
              <h2>Factors That Affect Pricing</h2>
              <ul>
                <li>
                  <strong>Surface Area</strong> – Larger driveways, decks, and
                  homes require more time and resources.
                </li>
                <li>
                  <strong>Level of Dirt & Stains</strong> – Heavy buildup, mold,
                  and oil stains may require extra treatment.
                </li>
                <li>
                  <strong>Surface Type</strong> – Some materials require a
                  softer wash method, which can affect pricing.
                </li>
                <li>
                  <strong>Accessibility</strong> – Hard-to-reach areas or
                  multi-story homes may require additional care.
                </li>
              </ul>
            </div>
            <div className={styles.price_ranges}>
              <h2>Example Price Ranges</h2>
              <ul>
                <li>
                  Small Driveway or Walkway: <strong>$150+</strong>
                </li>
                <li>
                  Deck or Patio Cleaning: <strong>$175+</strong>
                </li>
                <li>
                  House Siding (Single Story): <strong>$200+</strong>
                </li>
              </ul>
              <p>
                Every property is different—contact us for a free estimate to
                get an exact price for your project!
              </p>
            </div>
            <ButtonLink text='Schedule A Free Estimate' link='/contact' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingGuide
