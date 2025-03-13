import React from 'react'
import styles from './ProjectsList.module.scss'
import { projects } from '../../../../assets/data/projects'
import SingleProject from './SingleProject'

const ProjectsList = () => {
  return (
    <div className={styles.projects_list}>
      <div className='page__inner page__horizontal-spacing-2xl'>
        <div className={styles.content}>
          <div className={styles.list}>
            {projects.map(project => (
              <SingleProject project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsList
