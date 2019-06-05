import React, { Component, Fragment } from "react";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import TicketList from "../../components/TicketList";
import { Container } from "./styles";

class Home extends Component {
  state = {
    tickets: []
  };

  apiGet = async e => {
    try {
      const { data: tickets } = await api.get(`/?orderby=score_reverse`);

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
        <TicketList tickets={this.state.tickets} />
      </Fragment>
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
