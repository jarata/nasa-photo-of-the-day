import React from 'react';
import { InputDiv, Input } from "../../styles/GlobalStyle.styled";

const DateInput = (props) => {
	let currDate = new Date().toISOString().split("T")[0];
	return (
		<InputDiv>
			<label htmlFor="date">
				APOD Archive:
				<Input type="date" min="1995-06-20" max={currDate} onChange={(event) => props.setDate(event.target.value)}/>
			</label>
		</InputDiv>
	)
};
export default DateInput;