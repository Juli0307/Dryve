import { createGlobalStyle } from 'styled-components';
import { space, layout } from 'styled-system';

export const GlobalStyle = createGlobalStyle` 
*{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box !important;


body {
  width: 90vw;
  height: 80vh;
  max-width: 1366px;
  max-height: 970px;
  background-color:${(props) => props.theme['pale-grey']}
}}
`;
