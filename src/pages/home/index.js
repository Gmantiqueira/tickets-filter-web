import React, { Component, Fragment } from "react";
import api from "../../services/api";

import TicketList from "../../components/TicketList";
import Filter from "../../components/Filter";
import { Container } from "./styles";

class Home extends Component {
  state = {
    tickets: [],
    url: "/?orderby=score_reverse"
  };

  apiGet = async e => {
    try {
      const { data: tickets } = await api.get(this.state.url);

      console.log(tickets);
      this.setState({
        tickets: tickets
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.apiGet();
  }

  render() {
    return (
      <Fragment>
        <Filter apiUrl={this.state.url} />
        <TicketList tickets={this.state.tickets} />
      </Fragment>
    );
  }
}

export default Home;
