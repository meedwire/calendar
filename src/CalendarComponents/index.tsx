import styled from 'styled-components';

interface PropsView {
  flexDirection?:
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'row'
    | 'row-reverse';
}

export const View = styled.div<PropsView>`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  padding: 10px;
`;
export const Text = styled.p`
  font-size: 16px;
`;
export const Button = styled.button`
  padding: 10px;
`;
