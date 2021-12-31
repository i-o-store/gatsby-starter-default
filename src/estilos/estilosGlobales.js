import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Original Surfer', cursive;
     html, body {
         overflow-x:hidden;
     }
 }
 
 /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba( 120, 8, 26, 0.70 ) #3d040d;
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: #3d040d;
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgba( 120, 8, 26, 0.70 );
    border: 3px solid #3d040d;
    border-radius: 10px;
  }
  
body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}
  `

