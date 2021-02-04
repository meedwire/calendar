import styled from 'styled-components';

interface PropsView {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const View = styled.div<PropsView>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  padding: 10px;
`;
