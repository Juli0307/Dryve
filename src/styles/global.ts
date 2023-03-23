import { createGlobalStyle } from 'styled-components';
import { space, layout } from 'styled-system';

export const GlobalStyle = createGlobalStyle` 
*{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box !important;


body {
  width: 100%;
  height: 100%;
  background-color:${(props) => props.theme['pale-grey']};
  font-family: 'Inter', sans-serif;
}}
`;
