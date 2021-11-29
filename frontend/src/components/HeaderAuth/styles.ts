import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  > h2 {
    color: ${(props) => props.theme.colors.primary};
    margin-left: 7px;
  }
  > img {
    width: 40px;
    height: 40px;
  }
`;
