import React from 'react'
import styles from './ProjectContent.module.scss'
import { FaMapPin } from 'react-icons/fa'
import type { ProjectInterface } from '../../../../assets/data/projects'

const ProjectContent = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className={styles.project_content}>
      <div className='page__inner page__horizontal-spacing-xl'>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={project.images[0]} alt='' />
          </div>
          <div className={styles.text_section}>
            <h1 className='section-title'>{project.title}</h1>
            <div className={styles.location}>
              <FaMapPin className={styles.icon} /> {project.location}
            </div>
            <div className={styles.description}>
              {project.description.map(paragraph => (
                <p className='section-paragraph'>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContent
