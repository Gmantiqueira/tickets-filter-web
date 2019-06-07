import React, { Component } from "react";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import { Container } from "./styles";
import Card from "../Card";

class TicketList extends Component {
  state = {
    tickets: [],
    apiUrl: this.props.tickets.apiUrl
  };

  apiGet = async e => {
    try {
      const { data: tickets } = await api.get(this.state.apiUrl);

      console.log(tickets);

      this.setState({
        ...this.state.tickets,
        tickets
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.props.updateUrl();
    this.apiGet();
    // window.addEventListener("scroll", this.ajaxPagination);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.ajaxPagination);
  // }

  // ajaxPagination = async e => {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     this.setState({ page: this.state.page + 1 });
  //     this.setState({
  //       url: "/?page=" + this.state.page
  //     });
  //     const { data: tickets } = await api.get(this.state.url);

  //     this.setState({
  //       ...this.state.tickets,
  //       tickets
  //     });
  //   }
  // };

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

const mapStateToProps = state => ({
  tickets: state.tickets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TicketActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketList);
