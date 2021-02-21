import styled from 'styled-components';

enum Radius {
  sm = '5px',
  md = '10px',
  xl = '15px',
}

interface PropsButton {
  radius?: keyof typeof Radius;
  padding?: number;
}

export const Button = styled.button<PropsButton>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) =>
    props.radius ? Radius[props.radius] : Radius[props.theme.radius]};
  border-style: hidden;
  text-transform: uppercase;
  outline: none;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: ${(props) => (props.padding ? `${props.padding}px` : undefined)};
`;
