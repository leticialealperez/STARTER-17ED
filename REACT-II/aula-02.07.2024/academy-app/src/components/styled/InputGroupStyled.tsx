import styled from 'styled-components';

export const InputGroupStyled = styled.div`
    margin: 12px 4px;
    text-align: left;

    label {
        color: #3a3a3a;
        font-size: 1.3rem;
        margin-right: 8px;
    }

    input {
        height: 32px;
        padding: 8px 12px;
        outline: none;
        border: 1px solid #cccc;
        border-radius: 4px;
        width: 100%;
    }

    button {
        width: 100%;
        height: 32px;
        background-color: #8a3cff;
        color: #fff;
        border: none;
        border-radius: 8px;
    }

    button:hover {
        background-color: #7529e6;
        cursor: pointer;
    }
`;