import React from 'react'
import DateInput from "./DateInput";
import { DateDiv } from "../../styles/GlobalStyle.styled";

const DateContainer = (props) => {
	return (
		<DateDiv>
			<DateInput setDate={props.setDate} currDate={props.currDate}/>
		</DateDiv>
	)
};
export default DateContainer;