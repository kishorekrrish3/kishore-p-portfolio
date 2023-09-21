import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className='services section'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I offer</span> 
            
            <div className='services__container container grid'>
                
                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services-icon'></i>
                        <h3 className='services__title'>Frontend<br />Developer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More
                    <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services__modal-title'>Frontend Developer</h3>
                            <p className='services__modal-description'>Service with 2 years of experience.
                                Providing quality work to clients and companies.</p>
                            
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    I develop the Responsive Websites for all devices.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Frontend development for websites using variety of Frameworks.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        My Websites are minimal, modern and user-friendly.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services-icon'></i>
                        <h3 className='services__title'>UI/UX<br />Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(2)}>View More
                    <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services__modal-title'>UI/UX Designer</h3>
                            <p className='services__modal-description'>Service with 2 years of experience.
                                Providing quality work to clients and companies.</p>
                            
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    I develop the User Interface.
                                         
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create Mockups and fully functional Prototypes.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create ux element interactions.  
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services-icon'></i>
                        <h3 className='services__title'>ML/DL<br />Engineer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(3)}>View More
                    <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services__modal-title'>ML/DL Engineer</h3>
                            <p className='services__modal-description'>Service with 2 years of experience.
                                Providing quality work to clients and companies.</p>
                            
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    I provide the apt pre-trained ML model for your problems.
                                         
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I provide Image Classification models and other DL models too.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I give the best solution to your problems with highest accuracy possible.  
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
      </section>
    
  )
}

export default Services