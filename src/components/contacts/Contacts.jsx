import React from 'react'
import "./contacts.css"

const Contacts = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get in Touch</h2>
            <span className='section__subtitle'>Contact Me</span>
          
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to me</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>kidkrrish3@gmail.com</span>

                            <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVXGVhlvRwNsqTjxPmhTSWPbQdGZZhCCvgFWQWfzmCZsGCmzFBZnzQRLGSGLFCTcxljSb' className='contact__button'>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bxl-whatsapp contact__card-icon'></i>

                            <h3 className='contact__card-title'>Whatsapp</h3>
                            <span className='contact__card-data'>+91 99948 90617</span>

                            <a href='https://wa.me/9994890617?text=urlencodedtext' className='contact__button'>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bxl-linkedin contact__card-icon'></i>

                            <h3 className='contact__card-title'>LinkedIn</h3>
                            <span className='contact__card-data'>Kishore P</span>

                            <a href='https://www.linkedin.com/in/kishore-p-592962252/' className='contact__button'>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contacts;
