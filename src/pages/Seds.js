import React from 'react'
import {Banner} from "../components/Seds/Banner"
import {About} from "../components/Seds/About"
import { ProjectsLine, ProjectsBack} from '../components/Seds/Projects'

const Seds = () => {
  return (
    <div className="Seds">
      <Banner/>
      <About/>
      <ProjectsLine/>
      <ProjectsBack/>
    </div>
  )
}

export default Seds