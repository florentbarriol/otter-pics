import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { RandomImageContainer } from './modules/randomImage/container';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-size: 16px;
    font-family: sans-serif;
  }
* {
  box-sizing: border-box;
}
`;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background: #121212;
  color: #fff;
  overflow: auto;
`;

const H1 = styled.h1`
  font-size: 4rem;
  margin: 4rem 0;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <H1>Here is a cut pic of an otter</H1>
      <RandomImageContainer />
    </Main>
  );
};

export default App;
