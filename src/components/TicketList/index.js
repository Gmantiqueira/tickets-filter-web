import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";

import { Container } from "./styles";
import Card from "../Card";

class TicketList extends Component {
  state = {
    tickets: [],
    url: "/?page=1",
    page: 1
  };

  apiGet = async e => {
    try {
      const { data: tickets } = await api.get(this.state.url);

      this.setState({
        ...this.state.tickets,
        tickets
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.apiGet();
    window.addEventListener("scroll", this.ajaxPagination);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.ajaxPagination);
  }

  ajaxPagination = async e => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.setState({ page: this.state.page + 1 });
      this.setState({
        url: "/?page=" + this.state.page
      });
      const { data: tickets } = await api.get(this.state.url);

      this.setState({
        ...this.state.tickets,
        tickets
      });
    }
  };

  render() {
    return (
      <Container>
        {this.state.tickets.map(ticket => (
          <Card ticket={ticket} />
        ))}
      </Container>
    );
  }
}

export default TicketList;
