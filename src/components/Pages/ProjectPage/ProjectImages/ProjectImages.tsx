import React from 'react'
import styles from './ProjectImages.module.scss'
import type { ProjectInterface } from '../../../../assets/data/projects'

const ProjectImages = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className={styles.project_images}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='section-title'>Project Images</h1>
          <div className={styles.images}>
            {project.images.map((image, index) => (
              <div className={styles.image} key={index}>
                <img src={image} alt='' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImages
