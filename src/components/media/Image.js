import React, { useState } from "react"

const Image = (props) => {
	console.log("Image:", props)
	const [hd, setHd] = useState(false);
	return (
		<div>
			<img src={hd === false ? props.image : props.hdimage} alt="Test" onClick={() => setHd(!hd)}/>
		</div>
	)
}

export default Image;