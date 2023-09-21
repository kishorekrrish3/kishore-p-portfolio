import React from 'react'
import "./certificates.css"

import AI from "../../assets/certificates/AI.jpg"
import AdvJS from "../../assets/certificates/AdvJS.jpg"
import Azure from "../../assets/certificates/Azure.jpg"
import Blockchain from "../../assets/certificates/Blockchain.jpg"
import Business from "../../assets/certificates/Business.png"
import C from "../../assets/certificates/C.jpeg"
import CSS from "../../assets/certificates/CSS.jpg"
import Dataxact from "../../assets/certificates/Dataxact.png"
import DeepLearning from "../../assets/certificates/DeepLearning.jpg"
import Devtools from "../../assets/certificates/Devtools.jpg"
import Docker from "../../assets/certificates/Docker.jpg"
import DSA from "../../assets/certificates/DSA.jpg"
import EthicalHacking from "../../assets/certificates/EthicalHacking.jpg"
import Git from "../../assets/certificates/Git.jpg"
import GuviPython from "../../assets/certificates/GuviPython.png"
import Hacklah from "../../assets/certificates/Hacklah.png"
import HTMLCSS from "../../assets/certificates/HTMLCSS.jpg"
import HTML5CSS3 from "../../assets/certificates/HTML5CSS3.jpg"
import Internet from "../../assets/certificates/Internet.jpg"
import JSBasics from "../../assets/certificates/JSBasics.jpg"
import ML from "../../assets/certificates/ML.jpg"
import Network from "../../assets/certificates/Network.png"
import NPM from "../../assets/certificates/NPM.jpg"
import Python from "../../assets/certificates/Python.jpg"
import PythonBasic from "../../assets/certificates/PythonBasic.jpg"
import PythonFundamentals from "../../assets/certificates/PythonFundamentals.png"
import PythonML from "../../assets/certificates/PythonML.png"
import WebDesign from "../../assets/certificates/WebDesign.jpg"
import WebDev from "../../assets/certificates/WebDev.jpg"
import YAML from "../../assets/certificates/YAML.jpg"


const Certificates = () => {
  return (
    <section className='certificates section'>
        <h2 className='section__title'>Certifications</h2>
        <span className='section__subtitle'>What I've done</span> 

          <div className='cert__content'>
              <div className='cert__box'>
                  <img src={AI} alt='AI' className='cert__img' />
                  <h3 className='cert__name'>Machine Learning Foundation</h3>
                  <p className='cert__platform'>LinkedIn Learning</p>
              </div>

              <div className='cert__box'>
                  <img src={Azure} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Microsoft Azure Fundamentals</h3>
                  <p className='cert__platform'>Microsoft Learn</p>
              </div>
            
              <div className='cert__box'>
                  <img src={GuviPython} alt='GuviPython' className='cert__img' />
                  <h3 className='cert__name guvi'>Python</h3>
                  <p className='cert__platform'>GUVI</p>
              </div>

              <div className='cert__box'>
                  <img src={ML} alt='ML' className='cert__img' />
                  <h3 className='cert__name'>A-Z Machine Learning</h3>
                  <p className='cert__platform'>SuperDataScience Team - Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={DeepLearning} alt='DeepLearning' className='cert__img' />
                  <h3 className='cert__name'>A-Z Deep Learning</h3>
                  <p className='cert__platform'>SuperDataScience Team - Udemy</p>
              </div>
              
              <div className='cert__box'>
                  <img src={WebDev} alt='WebDev' className='cert__img' />
                  <h3 className='cert__name'>Complete Web Development Bootcamp</h3>
                  <p className='cert__platform'>Angela Yu - Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={WebDesign} alt='WebDesign' className='cert__img' />
                  <h3 className='cert__name'>Complete Web & Mobile Designer</h3>
                  <p className='cert__platform'>Zero to Mastery - Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={EthicalHacking} alt='EthicalHacking' className='cert__img' />
                  <h3 className='cert__name'>Complete Ethical Hacking Bootcamp</h3>
                  <p className='cert__platform'>SuperDataScience Team - Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={DSA} alt='DSA' className='cert__img' />
                  <h3 className='cert__name'>Master the Coding Interview : DSA</h3>
                  <p className='cert__platform'>Zero to Mastery - Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={Python} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Python Programming for Beginners</h3>
                  <p className='cert__platform'>Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={PythonBasic} alt='PythonBasic' className='cert__img' />
                  <h3 className='cert__name'>Python Basic</h3>
                  <p className='cert__platform'>HackerRank</p>
              </div>

              <div className='cert__box'>
                  <img src={CSS} alt='CSS' className='cert__img' />
                  <h3 className='cert__name'>CSS</h3>
                  <p className='cert__platform'>HackerRank</p>
              </div>

              <div className='cert__box'>
                  <img src={Dataxact} alt='Dataxact' className='cert__img' />
                  <h3 className='cert__name'>Dataxact - Datathon</h3>
                  <p className='cert__platform'>Data Science Club - VIT Chennai</p>
              </div>

              <div className='cert__box'>
                  <img src={Hacklah} alt='Hacklah' className='cert__img' />
                  <h3 className='cert__name'>Hacklah - Hackathon</h3>
                  <p className='cert__platform'>Hacklah</p>
              </div>

              <div className='cert__box'>
                  <img src={Business} alt='Business' className='cert__img' />
                  <h3 className='cert__name'>Global Business Trends and Oppurtunities - Webinar</h3>
                  <p className='cert__platform'>VITFAM - VIT Chennai</p>
              </div>

              <div className='cert__box'>
                  <img src={Network} alt='Network' className='cert__img' />
                  <h3 className='cert__name'>Your Network is Your Net-worth - Webinar</h3>
                  <p className='cert__platform'>VITFAM - VIT Chennai</p>
              </div>

              <div className='cert__box'>
                  <img src={PythonML} alt='PythonML' className='cert__img' />
                  <h3 className='cert__name'>Python for Machine Learning</h3>
                  <p className='cert__platform'>Great Learning</p>
              </div>

              <div className='cert__box'>
                  <img src={PythonFundamentals} alt='PythonFundamentals' className='cert__img' />
                  <h3 className='cert__name'>Python Fundamentals</h3>
                  <p className='cert__platform'>Great Learning</p>
              </div>

              <div className='cert__box'>
                  <img src={C} alt='C' className='cert__img' />
                  <h3 className='cert__name'>C for Beginners</h3>
                  <p className='cert__platform'>Great Learning</p>
              </div>

              <div className='cert__box'>
                  <img src={Blockchain} alt='Blockchain' className='cert__img' />
                  <h3 className='cert__name'>Blockchain Developer Guide - Webinar</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={HTMLCSS} alt='HTMLCSS' className='cert__img' />
                  <h3 className='cert__name'>Learn HTML and CSS</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={HTML5CSS3} alt='HTML5CSS3' className='cert__img' />
                  <h3 className='cert__name'>Learn Advanced HTML and CSS Concepts</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={JSBasics} alt='JSBasics' className='cert__img' />
                  <h3 className='cert__name'>Learn JavaScript Basics</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={AdvJS} alt='AdvJS' className='cert__img' />
                  <h3 className='cert__name'>Advanced Practical JavaScript</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={Devtools} alt='Devtools' className='cert__img' />
                  <h3 className='cert__name'>Chrome DevTools Course</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={Git} alt='Git' className='cert__img' />
                  <h3 className='cert__name'>Git Masterclass</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={Internet} alt='Internet' className='cert__img' />
                  <h3 className='cert__name'>Learn the basics of Web - Internet Fundamentals</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={NPM} alt='NPM' className='cert__img' />
                  <h3 className='cert__name'>Learn NPM - Node Package Manager Complete Course</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={YAML} alt='YAML' className='cert__img' />
                  <h3 className='cert__name'>YAML Fundamentals for DevOps, Cloud and IaC Engineers</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

              <div className='cert__box'>
                  <img src={Docker} alt='Docker' className='cert__img' />
                  <h3 className='cert__name'>Docker : Containerization for Modern Development</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div>

        </div>  

    </section>
  )
}

export default Certificates