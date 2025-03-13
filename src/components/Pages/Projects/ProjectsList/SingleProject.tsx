import React from 'react'
import styles from './ProjectsList.module.scss'
import { FaMapPin, FaLongArrowAltRight } from 'react-icons/fa'
import type { ProjectInterface } from '../../../../assets/data/projects'
import { ButtonLink } from '../../../Common/ButtonLink'

const SingleProject = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className={`${styles.single_project} card`}>
      <div className={styles.image}>
        <img src={project.images[0]} alt='' />
      </div>
      <div className={styles.text_section}>
        <h2>{project.title}</h2>
        <div className={styles.location}>
          <FaMapPin className={styles.icon} />
          <span>{project.location}</span>
        </div>
        <p className={styles.short_description}>{project.shortDescription}</p>
        <ButtonLink
          text={
            <>
              View Project <FaLongArrowAltRight style={{ marginLeft: '8px' }} />
            </>
          }
          link={`/projects/${project.id}`}
          color='secondary'
        />
      </div>
    </div>
  )
}

export default SingleProject
