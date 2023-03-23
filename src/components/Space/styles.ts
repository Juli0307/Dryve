import styled from 'styled-components';
import { SpaceProps } from '.';

export const SpaceWrapper = styled.div<SpaceProps>`
  width: ${(props) => props?.width || '4px'};
  height: 4px;
  margin-top: ${(props) =>
    props.mT ? props.mT - 4 : props.mY ? props.mY - 4 : 0}px;
  margin-bottom: ${(props) =>
    props.mB ? props.mB - 4 : props.mY ? props.mY - 4 : 0}px;
  margin-right: ${(props) =>
    props.mR ? props.mR - 4 : props.mX ? props.mX - 4 : 0}px;
  margin-left: ${(props) =>
    props.mL ? props.mL - 4 : props.mX ? props.mX - 4 : 0}px;
`;
