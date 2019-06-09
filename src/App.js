import React, { Component } from "react";
import { Provider } from "react-redux";

import Home from "./pages/home";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/components";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Container>
          <Home />
        </Container>
      </Provider>
    );
  }
}

export default App;
