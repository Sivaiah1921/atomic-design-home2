import React from 'react'
import './Banner.css'
import BannerImage from '../../Molecules/BannerContent/BannerImage'
import BannerHeading from '../../Molecules/BannerContent/BannerHeading'

/**
 * Banner Component
 */
const Banner:React.FC = () =>{
    return (
        <>
        <div className="bannerStyles">
            <BannerImage srcImg="./images/americaBanner.png" altText="no-image" className="bannerImage" />
             <BannerHeading text="Season Premiere" className="sesson" tagName="span"/>
             <BannerHeading tagName="span" className="bannerSpan" text="Lorem ipsum dolor sit amet, consecteturadipae"/> 
            <button><BannerImage srcImg="./images/playbutton.svg" altText="no-image" />Wactch Now</button>
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
