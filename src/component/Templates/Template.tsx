import React from 'react'
import Banner from '../Organisams/Banner/Banner'
import ContentArea from '../Organisams/ConentArea/ConentArea'
import Header from '../Organisams/Header/Header'
import './Template.css'
/**
 * Template of discovey component
 */

const Template:React.FC<TemplateProps>= () => {
    return (
        <div className="main">
            <div className="hero-wrapper" >
                <div className="header"><Header /></div>
                <div className="banner" ><Banner /></div>
            </div>

             <div className="content-wrapper" ><ContentArea /></div>
        </div>
    )
}

export default Template;

interface TemplateProps  {}