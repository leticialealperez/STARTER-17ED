import styled from 'styled-components';
import { Button } from './Button';


export const ButtonCard = styled(Button)`
    background-color: #918e8ecc;
    border-color: #918e8ecc;
    padding:  12px 24px;
    font-weight: 500;
    
    &:hover {
        background-color: #616161e1;
        border-color: #616161e1;
    }

    &:focus {
        box-shadow: 0 0 0 0.25rem #9898983a;
    }

    &:active {
        background-color: #616161e1;
        border-color: #616161e1;
    }

    &:disabled {
        background-color: #616161e1;
        border-color: #616161e1;
    }
`;


