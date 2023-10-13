import React from 'react'
import "./badges.css"
import GenAI from '../../assets/badges/GenAI.png'
import LaunchingIntoML from '../../assets/badges/LaunchingIntoML.png'
import ImageGen from '../../assets/badges/ImageGen.png'
import K8sArchitect from '../../assets/badges/K8sArchitect.png'
import K8sApprentice from '../../assets/badges/K8sApprentice.png'
import Tensorflow from '../../assets/badges/Tensorflow.png'

const Badges = () => {
  return (
    <section className='badges section'>
        <h2 className='section__title'>Badges</h2>
        <span className='section__subtitle'>What I've achieved</span> 

          <div className='badge__content'>
            <div className='badge__box'>
                <img src={GenAI} alt='GenAI' className='badge__img' />
                {/* <h3 className='cert__name'>Introduction to Generative AI</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
              </div>
          
            <div className='badge__box'>
                <img src={LaunchingIntoML} alt='LaunchingIntoML' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
              </div>

              <div className='badge__box'>
                <img src={ImageGen} alt='ImageGen' className='badge__img' />
                {/* <h3 className='badge__name'>Introduction to Image Generation</h3>
                <p className='badge__platform'>Google Cloud Skills Boost</p> */}
              </div>
        
              <div className='badge__box'>
                <img src={Tensorflow} alt='Tensorflow' className='badge__img' />
                {/* <h3 className='badge__name'>Introduction to Image Generation</h3>
                <p className='badge__platform'>Google Cloud Skills Boost</p> */}
              </div>
                      
            <div className='badge__box'>
                <img src={K8sApprentice} alt='K8sApprentice' className='badge__img' />
                {/* <h3 className='badge__name'>K8S Apprentice</h3>
                <p className='badge__platform'>KubeCampus</p> */}
              </div>

              <div className='badge__box'>
                <img src={K8sArchitect} alt='K8sArchitect' className='badge__img' />
                {/* <h3 className='badge__name'>K8s Architect</h3>
                <p className='badge__platform'>KubeCampus</p> */}
              </div>

          </div>  
    </section>
  )
}

export default Badges


