import styled from 'styled-components';

export const Container = styled.section`
 display: flex;
 flex-direction: column;
 > h1,
 h2 {
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.indigo};
 }
`;
export const EmptyList = styled.div`
 display: flex;
 background-color: ${props => props.theme.colors.white};
 border-radius: 0.5rem;
 padding: 1.25rem;
 color: ${props => props.theme.colors.primary};
 justify-content: center;
 margin-top: 1rem;
`;
