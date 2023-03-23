import styled from 'styled-components';
import { ThemeProps } from '../../styles/themes/default';

export const TextWrapper = styled.div<{
  fontSize: string;
  fontWeight: string;
  color?: ThemeProps | null;
  textAlign?: string;
  opacity?: number;
}>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  opacity: ${(props) => props.opacity};
`;
