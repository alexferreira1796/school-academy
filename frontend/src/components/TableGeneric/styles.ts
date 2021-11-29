import styled, { keyframes } from 'styled-components';

const Anima = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 16px solid #404349;
  border-top: 16px solid #00b94a;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${Anima} 2s linear infinite;
  margin-top: 20px;
`;

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  background-color: ${(props) => props.theme.colors.secondary};
  > caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }
  @media (max-width: 600px) {
    border: 0;
    > caption {
      font-size: 1.3em;
    }
  }
`;

export const Thead = styled.thead`
  @media (max-width: 600px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const Tr = styled.tr`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid #ddd;
  padding: 0.35em;
  @media (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.65em;
  }
`;

export const Th = styled.th`
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.62em;
`;

export const H1 = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  color: ${(props) => props.theme.colors.secondary};
`;
