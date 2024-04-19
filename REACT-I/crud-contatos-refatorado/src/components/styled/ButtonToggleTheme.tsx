import styled from "styled-components";

export const ButtonToggleTheme = styled.button`
	position: fixed;
	top: 15px;
	left: 15px;
	font-size: 1.5rem;
	border: 0;
	padding: 12px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.textColor};

	&:hover {
		cursor: pointer;
	}
`;
