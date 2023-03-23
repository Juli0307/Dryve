import React from 'react';
import { SpaceWrapper } from './styles';

export interface SpaceProps {
  mT?: number;
  mB?: number;
  mY?: number;
  mL?: number;
  mR?: number;
  mX?: number;
  children?: any;
  width?: string;
}
export default function Space(props: SpaceProps) {
  return <SpaceWrapper {...props}>{props.children}</SpaceWrapper>;
}
