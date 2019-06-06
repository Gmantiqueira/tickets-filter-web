import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import { Container, Wrapper } from "./styles/components";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <GlobalStyle />
          <Container>
            <Routes />
          </Container>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
