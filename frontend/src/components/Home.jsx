import React from 'react'
import {Link} from 'react-router-dom'
import ImgEx from './ImgEx'
import HowWW from './HowWW'
import Footer from './Footer'
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <>
        <div className='homeContainer'> 
            <div className='homeLeft'>
                <div><h3 style={{color: '#BEE56B'}}>UNLEASHING THE POWER OF LEAP-AI TO GENERATE STUNNING, ONE-OF-A-KIND IMAGES</h3></div>
                <div><p style={{color:'#B56FEC'}}>The IMAGINE - AI, which is built using the Leap-AI, aims to solve the problem of limited creativity and imagination. This is a fully mobile responsive image generator built with ReactJS, NodeJS and ExpressJS that uses Leap-AI models to generate images.
                      The IMAGINE - AI offers a solution to this problem by providing users with a powerful AI tool that can generate original and visually stunning images. With just a few prompts or keywords, the AI is able to generate a wide range of images that are unlike anything that has been seen before.</p></div>
                <Link to="/genimg"><button  className='homeButton'>Generate</button></Link>
            </div>
            <div className='homeRight'>
                {/* <img className='homeImg' src={ss} alt="" /> */}
                <Player src='https://assets10.lottiefiles.com/packages/lf20_zrqthn6o.json' className="player" loop autoplay />
            </div>
        </div>
        <ImgEx/>
        <HowWW/>
        <Footer/>
    </>
  )
}

export default Home