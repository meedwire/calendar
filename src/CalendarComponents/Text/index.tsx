import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  color: ${(props) => `${props.color ? props.color : props.theme.text}`};
  margin-block-end: 0px;
  margin-block-start: 0px;
`;
