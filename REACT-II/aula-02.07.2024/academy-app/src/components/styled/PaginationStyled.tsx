import styled from 'styled-components';

export const PaginationStyled = styled.section`
    display: flex;
    justify-content: space-between;

    div {
        select {
            padding: 4px;
            margin-left: 6px;
        }

        button {
            padding: 4px 6px;
            margin: 0 6px;
            border: none;
            background-color: transparent;
            text-decoration: underline;
            color: #fff;
        }

        button:hover {
            cursor: pointer;
        }
    }

`;