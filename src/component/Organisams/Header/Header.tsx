import React from 'react'
import './Header.css'
// import {Link} from 'react-router-dom'
import Image from '../../Atoms/Image/Image'

/**
 * Header component render the header links
 */
const Header:React.FC = () => { 
    return (
        <div className="header">
            <li  className="li tlc"><Image srcImg="./images/Tlc.svg" altText="tlc"/></li>
            <li  className="li gridIcon"><Image srcImg="./images/grid-icon.svg" altText="shows"/>&nbsp;<span className="shows">Shows</span></li>
            <li  className="li onNow"><Image srcImg="./images/live.svg" altText="live" />&nbsp;<span className="shows">OnNow</span></li>
            <li className="li search"><Image srcImg="./images/search.svg" altText="search" /><span>Search</span></li>
            <li  className="li profile"><span>xfinity</span><Image srcImg="./images/loginprofile.svg" altText="loginprofile" /></li>
        </div>
    )
}

export default Header
