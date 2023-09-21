import styled from 'styled-components';

export const Container = styled.form`
 display: flex;
 flex-direction: column;

 > label {
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors['gray-lighten-1']};
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  border-radius: 0.5rem;
  width: calc(100vw - 4rem);
  position: relative;
  > div {
   display: flex;
   width: 100%;
   > svg {
    margin-right: 0.5rem;
    cursor: pointer;
   }
   > input {
    border: 0;
    padding: 0;
    outline: none;
    width: 100%;
    margin-right: 1rem;

    &:focus {
     background-color: ${props => props.theme.colors['gray-lighten-1']};
    }
    &:placeholder-shown {
     color: ${props => props.theme.colors.info};
     padding: 0;
     border: 0;
     outline: none;
     transition: all 0.4s;
     &:hover {
      color: ${props => props.theme.colors['info-lighten-1']};
      transition: all 0.4s;
     }
    }
   }
  }
  &:hover {
   color: ${props => props.theme.colors.gray};
   transition: all 0.4s;
  }
  &:not(:hover) {
   color: ${props => props.theme.colors['gray-darken-1']};
   transition: all 0.4s;
  }
  &:has(:placeholder-shown) {
   color: ${props => props.theme.colors.info};
   transition: all 0.4s;
   &:hover {
    color: ${props => props.theme.colors['info-lighten-1']};
    transition: all 0.4s;
   }
  }
  > button {
   border-radius: 0.25rem;
   border: 1px solid ${props => props.theme.colors.secondary};
   color: ${props => props.theme.colors['secondary-lighten-1']};
   transition: all 0.4s;
   cursor: pointer;
   width: auto;
   white-space: nowrap;
   &:hover {
    border: 1px solid ${props => props.theme.colors['secondary-lighten-1']};
    color: ${props => props.theme.colors.secondary};
    transition: all 0.4s;
   }
  }
  > span {
   position: absolute;
   color: ${props => props.theme.colors.gray};
   top: 2.75rem;
   left: 2.75rem;
   font-size: 10px;
  }
 }
 .error {
  color: ${props => props.theme.colors.error};
  font-size: 0.75rem;
 }
 @media only screen and (max-width: 599px) {
  > label {
   flex-direction: column;
   > div {
    margin-bottom: 1.75rem;
    > input {
     margin-right: 0;
    }
   }
   > button {
    width: 100%;
   }
  }
 }
`;
