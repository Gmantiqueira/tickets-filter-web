import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import { Container } from "./styles";
import Card from "../Card";

class TicketList extends Component {
  state = {
    tickets: this.props.tickets
  };
  render() {
    return (
      <Container>
        {this.props.ticketList.map(ticket => (
          <Card ticketList={ticket} />
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
