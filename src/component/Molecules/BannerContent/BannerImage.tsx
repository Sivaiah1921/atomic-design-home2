import React from 'react'
import Image,{ImageProp} from '../../Atoms/Image/Image'

const  BannerImage:React.FC<ImageProp> = ({srcImg,altText,className}) => {
    return (
        <div>
            <Image srcImg={srcImg} altText={altText} className={className}/>
        </div>
    )
}

export default BannerImage
