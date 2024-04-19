import styled from "styled-components";

export const Input = styled.input`
	padding: 18px 12px;
	border-radius: 4px;
	border: 0;
	outline: 0;
	width: 100%;
	font-size: 1rem;
	background-color: #ccc;
	margin-bottom: 18px;
	display: block;

	&:valid {
		border: 2px solid green;
		outline: 1px solid green;
	}

	&:invalid {
		border: 2px solid red;
		outline: 1px solid red;
	}
`;
