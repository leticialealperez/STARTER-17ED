import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	border: 1px solid ${(props) => props.theme.textColor};
	border-collapse: collapse;

	th,
	td {
		padding: 12px 8px;
		border: 1px solid ${(props) => props.theme.textColor};
	}
`;
