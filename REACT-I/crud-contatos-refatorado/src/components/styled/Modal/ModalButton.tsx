import styled from 'styled-components';

interface ModalButtonProps {
    mode: 'confirm' | 'cancel';
}

export const ModalButton = styled.button<ModalButtonProps>`
    padding: 8px 18px;
    border: 1px solid ${props => props.mode === 'confirm' ? '#07a830cc' : '#cccc'};
    background-color: ${props => props.mode === 'confirm' ? '#07a830cc' : '#cccc'};
    border-radius: 8px;
    margin-right: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        color: white;
    }
`;