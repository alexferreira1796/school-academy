import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const Form = styled.form`
  width: 320px;
  height: auto;

  padding: 30px;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  margin-bottom: 15px;
  text-align: right;
  &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 5px solid ${(props) => props.theme.colors.primary};
    position: absolute;
    right: 28px;
  }
`;

export const ContainerInput = styled.div`
  margin-top: 15px;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  a {
    color: ${(props) => props.theme.colors.white};
    transition: all 0.2s linear;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ContainerRadios = styled.div`
  > p {
    color: #fff;
    text-align: left;
    margin-bottom: 10px;
    font-weight: bold;
    position: relative;
  }
`;
