import styled from 'styled-components'

// Variables


// Media Queries
const size = {
	a: '320px',
	b: '360px',
	c: '411px',
	d: '375px',
	e: '414px',
	f: '768px',
	g: '1024px'
};

// App
export const AppDiv = styled.div`
	text-align: center;
	background: lightsteelblue;
	padding: 2%;
`;

// Date
export const DateDiv = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	background: lightslategray;
	box-shadow: 5px 5px 4px 2px;
`;

export const InputDiv = styled.div`
	padding: .5%;
`;

export const Input = styled.input`
	margin-left: 5px;
`

// Media
export const MediaDiv = styled.div`
  border: 1px solid red;
`;

export const Img = styled.img`
	max-width: 100%;
	border-radius: 25px;
`;

// Content
export const ContDiv = styled.div`
	border: 1px solid black;
	padding: 2%;
	background: lightslategray;
	border-radius: 10px;
	box-shadow: 5px 5px 4px 2px;
	@media (max-width: 768px) {
	box-shadow: none;
	}
`;

export const ContP = styled.p`
	display: flex;
	justify-content: flex-start;
	text-align: left;
`;

export const ContSpan = styled.span`
	font-weight: bold;
`;
