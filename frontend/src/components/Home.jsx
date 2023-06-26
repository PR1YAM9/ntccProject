import React from 'react'
import ss from '../images/logo-no-background.webp'
import {Link} from 'react-router-dom'
import ImgEx from './ImgEx'

const Home = () => {
  return (
    <>
        <div className='homeContainer'> 
            <div className='homeLeft'>
                <div><h3 style={{color: '#BEE56B'}}>UNLEASHING THE POWER OF LEAP-AI TO GENERATE STUNNING, ONE-OF-A-KIND IMAGES</h3></div>
                <div><p style={{color:'#B56FEC'}}>The IMAGINE - AI, which is built using the OpenAI API library DALL-E 2, aims to solve the problem of limited creativity and imagination. This is a fully mobile responsive image generator built with Node.js and Express that uses OpenAI's Dall-E models to generate images.
The IMAGINE - AI offers a solution to this problem by providing users with a powerful AI tool that can generate original and visually stunning images. With just a few prompts or keywords, the AI is able to generate a wide range of images that are unlike anything that has been seen before.</p></div>
                <Link to="/genimg"><button  className='homeButton'>Generate</button></Link>
            </div>
            <div className='homeRight'>
                <img className='homeImg' src={ss} alt="" />
            </div>
        </div>
        <ImgEx/>
    </>
  )
}

export default Home