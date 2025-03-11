import React from 'react'
import styles from './ValuesList.module.scss'
import { FaRegCheckCircle } from 'react-icons/fa'
import { values } from '../../../assets/data/values'

const ValuesList = ({
  spacing = 'regular',
  align = 'center',
}: {
  spacing?: 'small' | 'regular'
  align?: 'left' | 'center'
}) => {
  return (
    <div className={`${styles.values} ${styles[spacing]} ${styles[align]}`}>
      {values.map(value => (
        <div className={`${styles.value} card`}>
          <div className={styles.head}>
            <div className={styles.value_icon}>
              <FaRegCheckCircle className={styles.icon} />
            </div>
            <h2>{value.title}</h2>
          </div>
          <p className='section-paragraph'>{value.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ValuesList
