import styled from 'styled-components';

interface ButtonProps {
    $type: 'banner' | 'card'
}

export const Button = styled.button<ButtonProps>`
    color: #fff;
    background-color: ${(props) => props.$type === 'banner' ? '#0d6efd' : '#918e8ecc' };
    border: 0px solid ${(props) => props.$type === 'banner' ? '#0d6efd' : '#918e8ecc' };
    border-radius: 8px;
    padding:  ${(props) => props.$type === 'banner' ? '18px 28px' : '12px 24px' };
    font-size: 1rem;
    cursor: pointer;
    font-weight: ${(props) => props.$type === 'banner' ? 600 : 500 };
    
    &:hover {
        color: #fff;
        background-color: ${(props) => props.$type === 'banner' ? '#0b5ed7' : '#616161e1' };
        border-color: ${(props) => props.$type === 'banner' ? '#0b5ed7' : '#616161e1' };
    }

    &:focus {
        box-shadow: 0 0 0 0.25rem rgba(49,132,253, .5);
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