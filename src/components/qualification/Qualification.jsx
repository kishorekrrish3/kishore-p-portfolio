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
                                  2013 - 2021
                              </div>
                          </div>

                          
                      </div>


                  </div>

                  <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      {/* SOFTZIN */}
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

                      {/* FITNESS */}

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>Fitness Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  
                              </div>
                          </div>

                          
                      </div>

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Active Lead<br />Design Team</h3>
                              <span className='qualification__subtitle'>Fitness Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Jun 2023 - Present
                              </div>
                          </div>

                          
                      </div>

                      {/* CULTURE IT */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Event Management</h3>
                              <span className='qualification__subtitle'>CultureIT Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title Ambassador'>Outreach Ambassador</h3>
                              <span className='qualification__subtitle'>CultureIT Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Sept 2023 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* VITEACH */}

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Technical Team Member</h3>
                              <span className='qualification__subtitle'>VITeach<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  
                              </div>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>School Team Member</h3>
                              <span className='qualification__subtitle'>VITeach<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  
                              </div>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>VITeach<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Sept 2023 - Present
                              </div>
                          </div>
                      </div>


                      {/* AATM */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>Arignar Anna Thamizh Mandram<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Jun 2023 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* VITC VAAZHKAI */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Graphic Designer</h3>
                              <span className='qualification__subtitle'>VITC Vaazhkai Community<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Sept 2023 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* VITRENDZ */}

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Graphic Designer</h3>
                              <span className='qualification__subtitle'>VITrendZ Community<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Sept 2023 - Present
                              </div>
                          </div>

                          
                      </div>

                      {/* VOICE IT */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>RJ</h3>
                              <span className='qualification__subtitle'>Voice-IT Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Sept 2023 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Operations Team Member</h3>
                              <span className='qualification__subtitle'>Voice-IT Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Sept 2023 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* IEEE PHOTONICS */}

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>IEEE Photonics Society<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Apr 2023 - Sept 2023
                              </div>
                          </div>

                          
                      </div>

                      {/* ANIMATION */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>Animation Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                    Mar 2023 - Oct 2023
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* FYI */}

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>Fraternity of Young Innovators Club -FYI<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Apr 2023- Oct 2023
                              </div>
                          </div>

                          
                      </div>

                      {/* TAI */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Aerodynamics Team Member</h3>
                              <span className='qualification__subtitle'>Team Aviators International <br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Apr 2022 - Sept 2022
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* TREKKING */}

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Design Team Member</h3>
                              <span className='qualification__subtitle'>Trekking Club<br />VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calender-alt'></i>
                                  Jun 2023 - Present
                              </div>
                          </div>

                          
                      </div>

                  </div>
              </div>
          </div>
    </section>
  )
}

export default Qualification