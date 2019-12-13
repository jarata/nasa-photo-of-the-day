import React, { useState } from "react"

const Image = (props) => {
	const [hd, setHd] = useState(false);
	return (
		<div onClick={() => setHd(!hd)}>
			Image
			{hd === false ? <img src={props.nasaPics[0]} alt="Test1" /> : <img src={props.nasaPics[1]} alt="Test2" /> }
		</div>
	)
}

export default Image;