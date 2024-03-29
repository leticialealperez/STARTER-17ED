import styled from "styled-components";

export const Footer = styled.footer`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    flex-direction: column-reverse;
    gap: 18px;
    justify-content: center;
  }
`;
