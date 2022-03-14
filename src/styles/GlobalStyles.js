import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    //style reset
    ${reset}

    * {
      box-sizing: border-box;
    }

    :root {
        body {
            background-color:#f9f9f9;
        }
    }
`;

export default GlobalStyles;
