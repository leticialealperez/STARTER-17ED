import styled from "styled-components";

interface FigureProps {
  $imageUrl: string;
}

export const Figure = styled.figure<FigureProps>`
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
`;
