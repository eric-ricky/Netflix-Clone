import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth : 1280px;
    --lightGrey: #eee;
    --midGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMid: 1.2rem;
    --fontSmall: 1rem;
    --redColor: #e50914;
  --whiteColor: #fff;
  --white: #ffffff;
}

* {
    box-sizing: border-box;

}

body {
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(---white);
    }

    h3 {
        font-size: 1.1.rem;
        font-weight: 600;
    }

    p {
        font-size:1rem;
        color: var(---white)
    }
}

.container {
    max-width: 1300px;
  margin: 0 auto;
  width: 100%;
}

.btn {
  color: #fff;
  border: none;
  outline: none;
  line-height: normal;
  background-color: var(--redColor);
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  :hover {
  transform: scale(1.05);}
  :focus {
  outline: none !important;
}


}

`;
