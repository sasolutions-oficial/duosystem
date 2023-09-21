import styled from 'styled-components';

type ContainerStyleProps = {
 height: number;
};

export const Container = styled.section<ContainerStyleProps>`
 display: flex;
 padding: 2rem;
 background-color: ${props => props.theme.colors.background};
 width: 100%;
 min-height: ${props => props.height}px;
`;
