import React from 'react'
import './EpisodeCollection.css'
import Image from '../../Atoms/Image/Image'
import PropTypes from 'prop-types' 
import EpisodeContent from '../EpisodeContent/EpisodeContent'

/**
 * renders the Episode list of data using this EpisodeCollection Component
 * @param {Object} param0 
 */
export interface Collection {
    item?:string
}
const EpisodeCollection:React.SFC<Collection> = ({item}) => {

    return (
        <>
            <Image className="standardEpisodee" srcImg={`./images/${item}.png`} altText="no-image"/>            
        </>
    )
        
  
}
EpisodeContent.prototype = {
    item:PropTypes.object
}
export default EpisodeCollection
