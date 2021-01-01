import React from "react";
import EpisodeCollection from "../../Molecules/EpisodeCollection/EpisodeCollection";
import PosterShowCollection from "../../Molecules/PosterShowCollection/PosterShowCollection";
import EpisodeData from "../../../config/EpisodeData.json";
import PosterData from "../../../config/PosterData.json";
import "./ConentArea.css";
import EpisodeContent from "../../Molecules/EpisodeContent/EpisodeContent";
import ContentImage from "../../Molecules/ContentArea/ContentImage";

/**
 * ContentArea component
 */

const ContentArea: React.FC = () => {
	return (
		<div>
			<EpisodeContent className='episodeContent' text='Continue Watching' />
			<div className='collection'>
				<div className='slider-lf'>
					{" "}
					<ContentImage srcImg='./images/leftslider.svg' altText='slider' />
				</div>
				{EpisodeData.map((item) => {
					return <EpisodeCollection key={item.iconName} item={item.iconName} />;
				})}
				<div className='slider-rg'>
					<ContentImage srcImg='./images/rightSlider.svg' altText='slider' />
				</div>
			</div>
			<EpisodeContent className='episodeContent' text='Recommenended For You' />
			<div className='collection-1'>
				{PosterData.map((item) => {
					return (
						<PosterShowCollection key={item.iconName} item={item.iconName} />
					);
				})}
			</div>
		</div>
	);
};

export default ContentArea;
