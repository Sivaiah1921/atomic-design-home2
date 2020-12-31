import React from 'react'
import Heading,{HeadingProp} from '../../Atoms/Heading/Heading'

const BannerHeading:React.FC<HeadingProp> = ({text,className,tagName}) => {
    return (
        <div>
            <Heading text={text} className={className} tagName={tagName}/>
        </div>
    )
}

export default BannerHeading
