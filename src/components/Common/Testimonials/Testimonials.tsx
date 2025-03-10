import React from 'react'
import styles from './testimonials.module.scss'
import { testimonialList } from './testimonialList'
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa'
const Testimonials = () => {
  const renderStars = (rating: number) => {
    const maxStars = 5 // Maximum number of stars

    return Array.from({ length: maxStars }, (_, index) =>
      index < rating ? (
        <FaStar key={index} className={styles.filledStar} />
      ) : (
        <FaRegStar key={index} className={styles.emptyStar} />
      )
    )
  }

  return (
    <div className={styles.testimonials}>
      <div className='page__inner page__horizontal-spacing-2xl'>
        <div className={styles.content}>
          <h1 className='section-title'>Customer Testimonials</h1>
          <p className='section-paragraph'>
            Don't just take our word for it, here's what our clients have to say
            about our power washing.
          </p>

          <div className={styles.list}>
            {testimonialList.map(t => (
              <div className={`${styles.item} card`}>
                <div className={styles.icon_container}>
                  <FaQuoteLeft className={styles.icon} />
                </div>
                <p className={styles.quote}>"{t.text}"</p>
                <div className={styles.rating}>{renderStars(t.rating)}</div>
                <div className={styles.name}>- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
