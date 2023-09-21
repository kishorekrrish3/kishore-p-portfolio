import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


  return (
      <section className='qualification section'>
          <h2 className='section__title'>Qualification</h2>
          <span className='section__subtitle'>My Personal Journey</span>

          <div className='qualification__container container'>
              <div className='qualification__tabs'>
                  <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                      <i className='uil uil-graduation-cap qualification__icon'></i>
                      Education
                  </div>

                  <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                      <i className='uil uil-briefcase qualification__icon'></i>
                      Experience
                  </div>
              </div>

              <div className='qualification__sections'>
                  <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Computer Science Engineering with AI and Robotics</h3>
                              <span className='qualification__subtitle'>Vellore Institute of Technology - Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  2022 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>High School</h3>
                              <span className='qualification__subtitle'>The Optimus Public School - Erode</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  2022 - Present
                              </div>
                          </div>

                          
                      </div>


                  </div>

                  <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>UI/UX Designer</h3>
                              <span className='qualification__subtitle'>Softzin - Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  2022 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
    </section>
  )
}

export default Qualification