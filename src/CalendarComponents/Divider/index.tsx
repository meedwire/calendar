import styled from 'styled-components';

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.border};
`;
