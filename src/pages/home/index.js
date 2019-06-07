import React, { Component, Fragment } from "react";

import TicketList from "../../components/TicketList";
import Filter from "../../components/Filter";
import { Container } from "./styles";

class Home extends Component {
  render() {
    return (
      <Container>
        <Filter />
        <TicketList />
      </Container>
    );
  }
}

export default Home;
