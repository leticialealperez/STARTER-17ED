import styled from 'styled-components';

interface AvatarProps {
    $imageUrl: string;
}

export const Avatar = styled.div<AvatarProps>`
    width: 140px;
    height: 140px;
    background-image: ${(props) => `url(${props.$imageUrl})`};
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`