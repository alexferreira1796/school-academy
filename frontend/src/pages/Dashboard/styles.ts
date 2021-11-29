import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 18px;
  font-weight: bold;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const Hours = styled.span`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.success};
  border-bottom: 1px solid ${(props) => props.theme.colors.success};
`;
