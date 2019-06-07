import React, { Component } from "react";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import TicketList from "../../components/TicketList";
import Filter from "../../components/Filter";
import { Container } from "./styles";

class Home extends Component {
  state = {
    tickets: []
  };

  apiGet = async e => {
    try {
      const { data: tickets } = await api.get(this.props.tickets.apiUrl);

      console.log(tickets);

      this.setState({
        tickets
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    // this.props.updateUrl();
    // this.apiGet();
  }

  render() {
    return (
      <Container>
        <Filter
          apiGet={() => {
            this.apiGet();
          }}
        />
        <TicketList ticketList={this.state.tickets} />
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
)(Home);
