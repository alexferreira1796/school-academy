import styled from 'styled-components';

interface IButton {
  color?: string;
}

export const Button = styled.button<IButton>`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.tertiary};
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
