import styled from 'styled-components';

export const Container = styled.section``;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    width: 200px;
  }
`;
