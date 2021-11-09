import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};

    *,
    *::before,
    *::after {
      margin: 0;
      box-sizing: border-box;
    }

    html,
    body {
      font-size: 62.5%;
      width: 100%;
      font-family:'Noto Sans KR', sans-serif;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
      font-size: 32px;
    }

    ul {
      list-style: none;
    }
`;

export default globalStyles;
