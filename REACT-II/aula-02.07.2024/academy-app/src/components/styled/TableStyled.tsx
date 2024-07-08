import styled from 'styled-components';

export const TableStyled = styled.table`
    width: 100%;
    border: 1px solid #fff;
    border-collapse: collapse;
    margin-bottom: 16px;

    td, th {
        border: 1px solid #fff;
        padding: 12px;
        text-align: center;


        button {
            padding: 8px;
            border: 1px solid #fff;
            color: #fff;
            border-radius: 4px;
            margin: 6px;
            background-color: transparent;
        }

        button:hover {
            cursor: pointer;
            background-color: #fff;
            color: #3a3a3a;
        }
    }

`;