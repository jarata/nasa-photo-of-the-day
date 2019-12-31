import React, { useState } from "react"
import { Img } from "../../styles/GlobalStyle.styled";

const Image = (props) => {
	// console.log("Image:", props)
	return (
		<div>
			<Img
				src={props.image}
				alt="See Explanation. Clicking on the picture will open
				the highest resolution version available in a new window."
				onClick={() => window.open(props.hdimage)}
			/>
		</div>
	)
};

export default Image;