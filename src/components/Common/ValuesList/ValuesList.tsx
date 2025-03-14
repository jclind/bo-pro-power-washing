import React from 'react'
import styles from './ValuesList.module.scss'
import { FaRegCheckCircle } from 'react-icons/fa'
import { values } from '../../../assets/data/values'

const ValuesList = ({
  spacing = 'regular',
  align = 'center',
  border = true,
}: {
  spacing?: 'small' | 'regular'
  align?: 'left' | 'center'
  border?: boolean
}) => {
  return (
    <div
      className={`${styles.values} ${styles[spacing]} ${styles[align]} ${
        border && styles.border_true
      }`}
    >
      {values.map(value => (
        <div className={`${styles.value} card`} key={value.title}>
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
