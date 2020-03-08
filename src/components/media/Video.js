import React from "react"

const Video = (props) => {
	return (
		<div>
			<iframe src={props.video} width="960" height="540" title="NASA APOD Video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
		</div>
	)
};

export default Video;