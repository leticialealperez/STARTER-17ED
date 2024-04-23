import styled from "styled-components";

export const Link = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.textColor};

	&:hover {
		text-decoration: underline;
	}
`;
