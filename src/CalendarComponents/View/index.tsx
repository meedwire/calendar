/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from 'styled-components';
import theme from '../../styles/theme';

enum Radius {
  sm = '5px',
  md = '10px',
  xl = '15px',
}

enum Size {
  sm = '40%',
  md = '70%',
  xl = '68%',
}

enum BgColor {
  // @ts-ignore
  primary = theme.colors.primary,
  // @ts-ignore
  secundary = theme.colors.secundary,
  // @ts-ignore
  background = theme.colors.background,
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
  bgColor?: keyof typeof BgColor;
  radius?: string;
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'center';
  alignItems?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start';
  height?: number;
  padding?: number;
}

export const View = styled.div<PropsView>`
  display: flex;
  padding: ${(props) => (props.padding ? `${props.padding}px` : undefined)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  border-width: ${(props) => (props.border ? `${props.border}px` : undefined)};
  border-color: ${(props) => (props.border ? props.theme.border : undefined)};
  border-style: ${(props) =>
    props.border ? props.borderStyle || 'solid' : undefined};
  width: ${(props) => (props.size ? Size[props.size] : undefined)};
  background-color: ${(props) =>
    props.bgColor ? BgColor[props.bgColor] : BgColor.background};
  border-radius: ${(props) =>
    props.radius ? Radius[props.radius] : Radius[props.theme.radius]};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'none'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : undefined)};
  height: ${(props) => (props.height ? `${props.height}px` : undefined)};
  transition: background-color 500ms, box-shadow 1000ms;
`;
