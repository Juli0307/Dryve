import React from 'react';
import { useTheme } from 'styled-components';
import { ThemeProps } from '../../styles/themes/default';
import { TextWrapper } from './styles';

export interface TextProps {
  component: 'span' | 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize: string;
  fontWeight?: string;
  color?: ThemeProps;
  children: any;
  textAlign?: string;
  opacity?: number;
}

export default function Text({
  component,
  fontSize,
  fontWeight = 'normal',
  color,
  children,
  textAlign = 'initial',
  opacity = 1,
}: TextProps) {
  const theme = useTheme();
  const components = {
    span: <span>{children}</span>,
    p: <p>{children}</p>,
    strong: <strong>{children}</strong>,
    h1: <h1>{children}</h1>,
    h2: <h2>{children}</h2>,
    h3: <h3>{children}</h3>,
    h4: <h4>{children}</h4>,
    h5: <h5>{children}</h5>,
    h6: <h6>{children}</h6>,
  };

  return (
    <TextWrapper
      fontSize={fontSize}
      fontWeight={fontWeight}
      opacity={opacity}
      // @ts-ignore
      color={color ? theme[color] : null}
      textAlign={textAlign}
    >
      {components[component]}
    </TextWrapper>
  );
}
