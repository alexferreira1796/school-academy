import styled from 'styled-components';

interface IStatus {
  status: boolean;
}

export const Tr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  @media (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.65em;
  }
`;

export const Td = styled.td`
  padding: 0.62em;
  text-align: center;
  @media (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      border-bottom: 0;
    }
  }

  > input {
    border: 1px solid #000000;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.colors.primary};
  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > a {
    margin-bottom: 10px;
  }
`;

export const Status = styled.p<IStatus>`
  color: ${({ status }) => (status ? 'green' : 'red')};
`;
