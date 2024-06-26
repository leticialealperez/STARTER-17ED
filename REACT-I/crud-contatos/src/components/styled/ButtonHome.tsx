import styled from "styled-components";

export const ButtonHome = styled.button`
	background: linear-gradient(to right, #196bca, #6433e0);
	background-color: #196bca;
	color: #fff;
	font-family: Trebuchet MS;
	font-size: 18px;
	font-weight: 800;
	font-style: normal;
	text-decoration: none;
	padding: 14px 15px;
	border: 0px solid #000;
	border-radius: 10px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	width: 400px;
	margin-bottom: 48px;
	margin-top: 48px;

	&:hover {
		background: linear-gradient(to right, #5482d0, #7d5ee3);
		background-color: #5482d0;
	}

	&:active {
		transform: scale(0.95);
	}
`;
