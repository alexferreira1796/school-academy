import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 100%;
  color: ${(props) => props.theme.colors.secondary};
`;
