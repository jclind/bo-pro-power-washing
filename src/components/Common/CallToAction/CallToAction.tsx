import React from 'react'
import styles from './CallToAction.module.scss'
import { ButtonLink } from '../ButtonLink'
const CallToAction = ({
  background = 'none',
}: {
  background?: 'none' | 'gradient'
}) => {
  return (
    <div className={`${styles.call_to_action} ${styles[background]}`}>
      <div className='page__inner'>
        <div className={`${styles.content} card`}>
          <div className={styles.text_section}>
            <h1>Let's Get In Touch</h1>
            <p>
              Ready to refresh your home? I can’t wait to hear from you—get your
              free estimate today!
            </p>
            <ButtonLink text='Contact Us Today' link='/contact' />
          </div>

          <div className={styles.image}>
            <img src='/images/shared/call-to-action-design.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
