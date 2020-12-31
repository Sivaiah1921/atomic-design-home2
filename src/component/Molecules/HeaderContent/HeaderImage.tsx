import React from 'react'
import Image from '../../Atoms/Image/Image'

function HeaderImage({srcImg,altText}) {
    return (
        <div>
            <Image srcImg={srcImg} altText={altText} />
        </div>
    )
}

export default HeaderImage
