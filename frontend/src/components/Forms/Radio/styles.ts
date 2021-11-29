import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
`;

export const Label = styled.label`
  > span {
    margin-left: 10px;
  }
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  cursor: pointer;
`;

export const Input = styled.input`
  cursor: pointer;
`;
