import React from 'react';
import "./badges.css";

import AI_ML from '../../assets/badges/AI_ML.png';
import attention_mechanism from '../../assets/badges/attention_mechanism.png';
import cloud_foundational_architecture from '../../assets/badges/cloud_foundational_architecture.png';
import cloud_fundamentals from '../../assets/badges/cloud_fundamentals.png';
import cloud_resources from '../../assets/badges/cloud_resources.png';
import cloud_vision_API from '../../assets/badges/cloud_vision_API.png';
import data_ML_AI from '../../assets/badges/data_ML_AI.png';
import encoder_decoder from '../../assets/badges/encoder_decoder.png';
import foundational_infrastructure from '../../assets/badges/foundational_infrastructure.png';
import generative_AI from '../../assets/badges/generative_AI.png';
import generative_AI_studio from '../../assets/badges/generative_AI_studio.png';
import image_captioning from '../../assets/badges/image_captioning.png';
import image_generation from '../../assets/badges/image_generation.png';
import K8s_apprentice from '../../assets/badges/K8s_apprentice.png';
import K8s_architect from '../../assets/badges/K8s_architect.png';
import ML from '../../assets/badges/ML.png';
import network_and_security from '../../assets/badges/network_and_security.png';
import perform_data_AI_ML from '../../assets/badges/perform_data_AI_ML.png';
import secure_networks from '../../assets/badges/secure_networks.png';
import tensorflow from '../../assets/badges/tensorflow.png';
import transformer_BERT from '../../assets/badges/transformer_BERT.png';
import vertex_AI from '../../assets/badges/vertex_AI.png';

const Badges = () => {
  return (
    <section className='badges section'>
        <h2 className='section__title'>Badges</h2>
        <span className='section__subtitle'>What I've achieved</span> 

          <div className='badge__content'>
            <div className='badge__box'>
                <img src={AI_ML} alt='AI_ML' className='badge__img' />
                {/* <h3 className='cert__name'>Introduction to Generative AI</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
              </div>
          
            <div className='badge__box'>
                <img src={attention_mechanism} alt='attention_mechanism' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
              </div>
            
              <div className='badge__box'>
                <img src={cloud_foundational_architecture} alt='cloud_foundational_architecture' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={cloud_fundamentals} alt='cloud_fundamentals' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={data_ML_AI} alt='data_ML_AI' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={encoder_decoder} alt='encoder_decoder' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={generative_AI} alt='generative_AI' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={generative_AI_studio} alt='generative_AI_studio' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={image_captioning} alt='image_captioning' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={image_generation} alt='image_generation' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={ML} alt='ML' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={network_and_security} alt='network_and_security' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={tensorflow} alt='tensorflow' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={transformer_BERT} alt='transformer_BERT' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={vertex_AI} alt='vertex_AI' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>

        <div className='badge__box'>
                <img src={cloud_resources} alt='cloud_resources' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={cloud_vision_API} alt='cloud_vision_API' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>

        <div className='badge__box'>
                <img src={foundational_infrastructure} alt='foundational_infrastructure' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>

        <div className='badge__box'>
                <img src={perform_data_AI_ML} alt='perform_data_AI_ML' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
        <div className='badge__box'>
                <img src={secure_networks} alt='secure_networks' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>

        <div className='badge__box'>
                <img src={K8s_apprentice} alt='K8s_apprentice' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        <div className='badge__box'>
                <img src={K8s_architect} alt='K8s_architect' className='badge__img' />
                {/* <h3 className='cert__name'>Launching Into Machine Learning</h3>
                <p className='cert__platform'>Google Cloud Skills Boost</p> */}
        </div>
        
          </div>  
    </section>
  )
}

export default Badges


