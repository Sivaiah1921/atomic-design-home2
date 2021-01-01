import React from "react";
import Heading, { HeadingProp } from "../../Atoms/Heading/Heading";

const EpisodeContent: React.FC<HeadingProp> = ({ text, className }) => {
	return <Heading className={className} text={text} />;
};

export default EpisodeContent;
