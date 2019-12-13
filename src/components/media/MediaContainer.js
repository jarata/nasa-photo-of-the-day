import React from "react"
import Image from "./Image";
import Video from "./Video";

const MediaContainer = (props) => {
	console.log("MediaContainer:", props.mediaData)
	return (
		<div>
			{props.mediaData.media_type === "image" ? <Image image={props.mediaData.url} hdimage={props.mediaData.hdurl}/> : <Video video={props.mediaData.url}/>}
		</div>
	)
}

export default MediaContainer;