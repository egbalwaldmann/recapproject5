import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  /* .ColorDiv {
    width: 100px;
    height: 100px;
    display: inline-block;
  } */
`;
