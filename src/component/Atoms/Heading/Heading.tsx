import * as React from "react";
import "./Heading.css";
// import PropTypes from 'prop-types'
/**
 * Heading Component
 * @param {Object} props
 */

// <reference no-default-lib="true"/>

interface String {
	padStart(maxLength: number, fillString?: string): string;
	padEnd(maxLength: number, fillString?: string): string;
}

export interface HeadingProp {
	className?: String;
	text?: String;
	tagName?: String;
	children?: any;
}

const Heading: React.FC<HeadingProp> = (props) => {
	const {
		className = "",
		children,
		text = "",
		tagName = "h1",
		...rest
	} = props;
	const TypeAsComponent: any = tagName || "h1";

	const headingClassNames = `atom--heading ${className}`;
	return (
		<TypeAsComponent className={headingClassNames} {...rest}>
			{text || children}
		</TypeAsComponent>
	);
};

export default Heading;
