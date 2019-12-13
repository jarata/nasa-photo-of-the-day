import React from "react"
import Content from "./Content";

const ContentContainer = (props) => {
	console.log("ContentContainer:", props)
	return (
		<div>
			<Content
				title={props.nasaData.title}
				date={props.nasaData.date}
				explanation={props.nasaData.explanation}
				copyright={props.nasaData.copyright}
			/>
		</div>
	)
}

export default ContentContainer;