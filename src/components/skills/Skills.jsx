import React from 'react'
import Frontend from './Frontend'
import ML from './ML'
import "./skills.css"
import Design from './Design'
import Cloud from './Cloud'
import Coding from './Coding'
import Devops from './Devops'

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My Technical Level</span>

            <div className='skills__container container grid'>
                <Frontend />
                <ML />
                <Design />
                <Coding />
                <Cloud />
                <Devops />
            </div>
        </section>
  )
}

export default Skills