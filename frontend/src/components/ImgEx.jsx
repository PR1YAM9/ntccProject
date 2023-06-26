import React from 'react'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'

const data = [
    {
        img: img1,
        text: 'Horse',
        para: 'Photograph of an astronaut riding a horse.'
    },
    {
        img: img2,
        text: 'Capybara',
        para: 'Photograph of an king capybara.'
    },
    {
        img: img3,
        text: 'Sports Car',
        para: 'Synthwave sports car on a port road.'
    },
    {
        img: img4,
        text: 'Astronaut',
        para: 'An astronaut lounging in a resort in space, vaporwave.'
    }
]


const ImgEx = () => {
  return (
    <div >
        <h2 style={{color: '#BEE56B', textAlign:'center'}}>Some AI Generated Images</h2>
        <div class="wrapper">
        {data.map((d)=>{
            return(
                <div class="cardEx">
              <img src={d.img} alt=""/>
              <div class="info">
                  <h1>{d.text}</h1>
                  <p>{d.para}</p>
              </div>
          </div>
            )
        })}
          
        </div>
    </div>
  )
}

export default ImgEx