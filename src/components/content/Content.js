import React from 'react';
import { ContP, ContSpan } from "../../styles/GlobalStyle.styled";

const Content = (props) => {
	// console.log("Content:", props);
	return (
		<div>
			<ContP aria-label="date"><ContSpan>{props.date}</ContSpan></ContP>
			<ContP aria-label="title"><ContSpan>{props.title}</ContSpan></ContP>
			<ContP aria-label="explanation"><ContSpan>Explanation:</ContSpan>{props.explanation}</ContP>
			{props.copyright === undefined ? <div style={{display: "none"}}/> : <ContP><ContSpan>Image Credit & Copyright:</ContSpan>{props.copyright}</ContP>}
		</div>
	)
};
export default Content;