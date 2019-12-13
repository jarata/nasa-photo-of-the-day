import React from 'react';

const Content = (props) => {
	console.log("Content:", props)
	return (
		<div>
			<p aria-label="title">{props.title}</p>
			<p aria-label="date">{props.date}</p>
			<p aria-label="explanation">{props.explanation}</p>
			<p aria-label="copyright">{props.copyright}</p>
		</div>
	)
}

export default Content;