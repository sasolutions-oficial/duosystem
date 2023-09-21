import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 align-content: center;
 align-items: center;
 background-color: ${props => props.theme.colors.white};
 border-radius: 0.5rem;
 padding: 1rem;
 margin-bottom: 0.5rem;
 > div {
  display: flex;
  align-content: center;
  width: 100%;
  .checkbox-container {
   display: flex;
   cursor: pointer;
   user-select: none;
   position: relative;
   left: 4px;
   .checkbox {
    opacity: 0;
    cursor: pointer;
    margin-right: 1rem;
    &:checked ~ .checkmark {
     background-color: ${props => props.theme.colors.primary};
     &::after {
      display: block;
     }
    }
   }
   .checkmark {
    position: absolute;
    top: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.primary};
    &::after {
     top: 3px;
     left: 3px;
     width: 8px;
     height: 8px;
     border-radius: 50%;
     background: ${props => props.theme.colors['primary-lighten-1']};
     content: '';
     position: absolute;
     display: none;
     clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
   }
  }
  .data-container {
   display: flex;
   position: relative;
   width: 100%;
   justify-content: space-between;
   > p {
    margin: 0;
    width: 100%;
    text-decoration: line-through;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 1rem;
   }
   > input {
    border: 0;
    outline: 0;
    padding: 0;
    width: 100%;
    background-color: ${props => props.theme.colors['gray-lighten-1']};
    margin-right: 1rem;
   }
  }
 }
 &:first-of-type {
  margin-top: 1rem;
 }

 .date-container {
  display: flex;
  flex-direction: column;
  width: auto;
  white-space: nowrap;
  margin-right: 1rem;
  column-gap: 1rem;
  &:nth-of-type(3) {
   width: auto;
   white-space: nowrap;
   > strong {
    color: ${props => props.theme.colors.success};
   }
  }
  > p {
   margin: 0;
   font-size: 0.75rem;
  }
  > strong {
   font-size: 0.75rem;
  }
 }
 @media only screen and (max-width: 599px) {
  flex-direction: column;
  > div {
   align-items: center;
   &:first-of-type {
    margin-bottom: 0.5rem;
   }
   &:last-of-type {
    margin-bottom: 0.5rem;
   }
  }
  .date-container {
   width: 100%;
   margin-right: 0;
   column-gap: 0;
   flex-direction: row;
   align-items: center;
   align-content: center;
   > p {
    margin-right: 0.25rem;
    &::after {
     content: ':';
    }
   }
   &:nth-of-type(3) {
    width: 100%;
   }
  }
 }
`;
