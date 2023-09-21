import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
          <h1 className='footer__title'>Kishore P</h1>
          <ul className='footer__list'>
              <li>
                  <a href='#about' className='footer__link'>About</a>
              </li>

              <li>
                  <a href='#projects' className='footer__link'>Projects</a>
              </li>

              <li>
                  <a href='#certificates' className='footer__link'>Certificates</a>
              </li>
          </ul>

          <div className='footer__social'>
            <a href='https://www.instagram.com/' className='footer__social-link' target='_blank'>
                <i className='bx bxl-instagram'></i>
            </a>
            
            <a href='https://behance.net/' className='footer__social-link' target='_blank'>
                <i className='bx bxl-behance'></i>
            </a>
            
          </div>

          <span className='footer__copy'>&#169; Kishore P - All Rights Reserved</span>
          </div>
    </footer>
  )
}

export default Footer