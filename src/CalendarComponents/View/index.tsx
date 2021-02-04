import styled from 'styled-components';

enum Size {
  sm = '40%',
  md = '70%',
  xl = '68%',
}

export interface PropsView {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  border?: number;
  size?: keyof typeof Size;
  borderStyle?:
    | 'none'
    | 'hidden'
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset';
}

export const View = styled.div<PropsView>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  padding: 10px;
  border-width: ${(props) => (props.border ? `${props.border}px` : undefined)};
  border-color: ${(props) => (props.border ? props.theme.border : undefined)};
  border-style: ${(props) =>
    props.border ? props.borderStyle || 'solid' : undefined};
  width: ${(props) => (props.size ? Size[props.size] : undefined)};
`;
