import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  border-radius: 8px;
  padding: 18px 28px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0b5ed7;
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }

  &:active {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }

  &:disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
`;
