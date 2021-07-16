import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body, #root {
    width: 100%;
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 99px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bbb;
  }
`;
