import styled from 'styled-components';

interface PropsText {
  fontSize?: number;
  color?: string;
}

export const Text = styled.p<PropsText>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : `16px`)};
  color: ${(props) => `${props.color ? props.color : props.theme.text}`};
  margin-block-end: 0px;
  margin-block-start: 0px;
`;
