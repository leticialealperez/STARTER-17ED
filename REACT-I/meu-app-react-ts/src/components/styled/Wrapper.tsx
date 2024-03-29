import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  text-align: center;

  h2 {
    font-weight: normal;
    font-size: 50px;
    line-height: 1;
    letter-spacing: -0.05rem;
    margin-bottom: 8px;

    span {
      opacity: 1;
      color: rgba(222, 226, 230, 0.75);
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 1140px) {
    width: 50%;
    text-align: start;
  }
`;
