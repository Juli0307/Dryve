import React from 'react';
import { CustomContentBox } from './styles';

export default function Content({ children }: { children: React.ReactNode }) {
  return <CustomContentBox>{children}</CustomContentBox>;
}
