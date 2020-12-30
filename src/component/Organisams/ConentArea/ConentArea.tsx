import React from 'react'
import EpisodeCollection from '../../Molecules/EpisodeCollection/EpisodeCollection'
import PosterShowCollection from '../../Molecules/PosterShowCollection/PosterShowCollection'
import EpisodeData from '../../../config/EpisodeData.json'
import PosterData from '../../../config/PosterData.json'
import './ConentArea.css'
import Image from '../../Atoms/Image/Image'
import Heading from '../../Atoms/Heading/Heading'


/**
 * ContentArea component
 */

const ContentArea:React.FC = () => {
    return (
        <div>
            <Heading className="episodeContent" text="Continue Watching" />
            <div  className="collection">
               <div className="slider-lf"> <Image srcImg='./images/leftslider.svg' altText='slider'/></div>
                    {EpisodeData.map(item => {
                        return  <EpisodeCollection key={item.iconName}  item={item.iconName} />
                             
                    } )}
                <div className="slider-rg"><Image srcImg='./images/rightSlider.svg' altText='slider'/></div> 
            </div>
            <Heading className="episodeContent" text="Recommenended For You"/>
            <div className="collection-1">
                    {PosterData.map(item => {
                        return  <PosterShowCollection  key={item.iconName}  item={item.iconName} />
                               
                    } )}
            </div>  
        </div>
    )
}

export default ContentArea
