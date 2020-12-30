import React from 'react'
import './Banner.css'
import Image from '../../Atoms/Image/Image'
import Heading from '../../Atoms/Heading/Heading'

/**
 * Banner Component
 */
const Banner:React.SFC = () =>{
    return (
        <>
        <div className="bannerStyles">
            <Image srcImg="./images/americaBanner.png" altText="no-image" className="bannerImage" />
             <Heading text="Season Premiere" className="sesson" tagName="span"/>
             <Heading tagName="span" className="bannerSpan" text="Lorem ipsum dolor sit amet, consecteturadipae"/> 
            <button><Image srcImg="./images/playbutton.svg" altText="no-image"/>Wactch Now</button>
        </div>
        <div className="slider-show">
            <span></span>
            <span className="selected"></span>
            <span></span>
            <span></span>
        </div>
        </>
    )
}

export default Banner
