import styled from 'styled-components';

export const Container = styled.section``;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  label {
    color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    input {
      width: 100%;
      border: 1px solid #000;
    }
    &:last-child {
      margin-left: 15px;
    }
  }

  button {
    width: 200px;
  }
`;
