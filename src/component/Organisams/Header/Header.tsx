import React from "react";
import "./Header.css";
// import {Link} from 'react-router-dom'
import HeaderImage from "../../Molecules/HeaderContent/HeaderImage";

/**
 * Header component render the header links
 */
const Header: React.FC = () => {
	return (
		<div className='header'>
			<li className='li tlc'>
				<HeaderImage srcImg='./images/Tlc.svg' altText='tlc' />
			</li>
			<li className='li gridIcon'>
				<HeaderImage srcImg='./images/grid-icon.svg' altText='shows' />
				&nbsp;<span className='shows'>Shows</span>
			</li>
			<li className='li onNow'>
				<HeaderImage srcImg='./images/live.svg' altText='live' />
				&nbsp;<span className='shows'>OnNow</span>
			</li>
			<li className='li search'>
				<HeaderImage srcImg='./images/search.svg' altText='search' />
				<span>Search</span>
			</li>
			<li className='li profile'>
				<span>xfinity</span>
				<HeaderImage
					srcImg='./images/loginprofile.svg'
					altText='loginprofile'
				/>
			</li>
		</div>
	);
};

export default Header;
