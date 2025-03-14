import React from 'react'
import styles from './InfoAndForm.module.scss'
import { FaEnvelope, FaPhoneAlt, FaInstagramSquare } from 'react-icons/fa'
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  PHONE_NUMBER,
} from '../../../../assets/data/legalInfo'
import ContactForm from './ContactForm'

const InfoAndForm = () => {
  return (
    <div className={styles.info_and_form}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.form_content}>
            <div className={styles.info}>
              <h1 className='section-title'>Get a Free Estimate</h1>
              <p className='section-paragraph'>
                Have questions or need a free estimate? We’re here to help!
                Contact us today, and let’s get your home looking its best.
              </p>
              <div className={styles.contact_info}>
                <div className={styles.contact_item}>
                  <div className={styles.icon_container}>
                    <FaEnvelope className={styles.icon} />
                  </div>
                  <a href={`mailto:${EMAIL_ADDRESS}`}>Shoot us an email</a>
                </div>
                <div className={styles.contact_item}>
                  <div className={styles.icon_container}>
                    <FaPhoneAlt className={styles.icon} />
                  </div>
                  <a href={`tel:${PHONE_NUMBER}`}>Give us a call</a>
                </div>
                <div className={styles.contact_item}>
                  <div className={styles.icon_container}>
                    <FaInstagramSquare className={styles.icon} />
                  </div>
                  <a href={INSTAGRAM_URL}>Message us on Instagram</a>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
          <div className={styles.map}>
            <div className={styles.image}>
              <img
                src='/images/contact/map.webp'
                alt='Cranberry Township Map Of Service'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoAndForm
