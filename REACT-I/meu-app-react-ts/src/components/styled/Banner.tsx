import styled from "styled-components";
import img from "../../assets/image-4.jpg";

export const Banner = styled.div`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), ${`url(${img})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  div {
    width: 80%;
    text-align: center;

    h1 {
      font-size: calc(1.375rem + 1.5vw);
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: bolder;
      line-height: 1.2;
      color: #ffff;
    }

    p {
      opacity: 0.9;
      margin-top: 0;
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
      color: #ffff;
    }
  }
`;
