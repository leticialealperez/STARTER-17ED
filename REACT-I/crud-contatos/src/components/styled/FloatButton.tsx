import styled from 'styled-components';

export const FloatButton = styled.button`
    position: fixed;
    right: 45px;
    bottom: 45px;
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    font-size: 1.75rem;
    background-color: #fa7924;
    color: #fff;

    &:hover {
        background-color: #f16c14;
        color: #4e659e;
        cursor: pointer;
    }
`;