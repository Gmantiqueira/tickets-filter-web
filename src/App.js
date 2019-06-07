import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import { Container } from "./styles/components";

import store from "./store";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Container>
            <Routes />
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
