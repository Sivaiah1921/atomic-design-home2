import React from 'react'
import Image,{ImageProp} from '../../Atoms/Image/Image'

const ContentImage:React.FC<ImageProp> = ({srcImg,altText}) => {
    return (
        <div>
            <Image srcImg={srcImg} altText={altText}/>
        </div>
    )
}

export default ContentImage
