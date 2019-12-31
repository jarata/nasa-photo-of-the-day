import React from "react"
import Content from "./Content";
import { ContDiv } from "../../styles/GlobalStyle.styled";

const ContentContainer = (props) => {
	// console.log("ContentContainer:", props)
	return (
		<ContDiv>
			<Content
				title={props.nasaData.title}
				date={props.nasaData.date}
				explanation={props.nasaData.explanation}
				copyright={props.nasaData.copyright}
			/>
		</ContDiv>
	)
};
export default ContentContainer;