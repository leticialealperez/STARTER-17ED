import styled from 'styled-components';

interface ContainerProps {
    $display: 'flex' | 'block';
    $alignItems?: 'center' | 'start' | 'end';
    $justifyContent?: 'center' | 'start' | 'end' | 'space-evenly';
    $direction?: 'row' | 'column';
    $reverse?: boolean;
    $fluid?: boolean;
    $wrap?: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$reverse ? `${props.$direction}-reverse`: props.$direction};
    align-items: ${(props) => props.$alignItems ?? 'stretch'};
    justify-content: ${(props) => props.$justifyContent ?? 'start'};
    max-width: ${(props) => props.$fluid ? '100%' : '1140px'};
    flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
    margin: 0 auto;

    @media (min-width: 1140px) {
        justify-content: space-between;
    }
`;