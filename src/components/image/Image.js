import React from "react"

const Image = (props) => {
	console.log("Image:", props)
	return (
		<div>
			Image
			<img src={props.nasaPics[0]} alt="NASA Astronomy Pic of the Day" />
		</div>
	)
}

export default Image;