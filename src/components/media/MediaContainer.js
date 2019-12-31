import React from "react"
import Image from "./Image";
import Video from "./Video";
import { MediaDiv } from "../../styles/GlobalStyle.styled";

const MediaContainer = (props) => {
	// console.log("MediaContainer:", props.mediaData)
	return (
		<MediaDiv>
			{props.mediaData.media_type === "image" ? <Image image={props.mediaData.url} hdimage={props.mediaData.hdurl}/> : <Video video={props.mediaData.url}/>}
		</MediaDiv>
	)
};

export default MediaContainer;