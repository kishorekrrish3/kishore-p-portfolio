import React from 'react'
import "./about.css"
import AboutImg from "../../assets/About.jpeg";
import CV from "../../assets/Kishore-CV.pdf";
import Info from "./Info"

const About = () => {
  return (
      <section className='about section' id='about'>
        <h2 className='section__title'>About me</h2>
        <span className='section__subtitle'>My Introduction</span>

        <div className='about__container container grid'>
              <img src={AboutImg} alt='' className='about__img' />
              
              <div className='about__data'>
                  <Info />
                  
                  <p className='about__description'>Frontend Developer and UI UX Designer. Have worked on a few
                        projects and for a startup as well. Also a ML DL Engineer and DevOps Enthusiast. Have years of
                      experience in competitive coding too.</p>
                  
                  <a download="" href={ CV } className='button button--flex'>Download CV</a>
              </div>

        </div>
      
      </section>
  )
}

export default About