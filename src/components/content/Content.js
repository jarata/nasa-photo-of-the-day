import React from 'react';
import { ContP } from "./Content.styled";

const Content = (props) => {
	console.log("Content:", props)
	return (
		<div>
			<ContP aria-label="date">{props.date}</ContP>
			<ContP aria-label="title">{props.title}</ContP>
			<ContP aria-label="explanation">{props.explanation}</ContP>
			<ContP aria-label="copyright">{props.copyright}</ContP>
		</div>
	)
}

export default Content;