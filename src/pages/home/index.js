import React, { Component } from "react";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import TicketList from "../../components/TicketList";
import Filter from "../../components/Filter";
import { Container } from "./styles";
import Loader from "react-loader-spinner";

class Home extends Component {
  state = {
    tickets: [],
    page: 1,
    loading: false,
    loadingPage: false,
    stopPagination: false
  };

  apiGet = async e => {
    this.setState({ loading: true, tickets: [] });
    try {
      await this.setState({
        page: 1,
        stopPagination: false
      });
      await this.props.setPage(this.state.page);
      await this.props.updateUrl();

      const { data: tickets } = await api.get(this.props.tickets.apiUrl);

      this.setState({
        tickets: tickets
      });
      // tickets: [...this.state.tickets, newTickets]
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.props.updateUrl();
    this.apiGet();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = async e => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.state.loadingPage &&
      !this.state.stopPagination
    ) {
      this.setState({ page: this.state.page + 1 });
      this.props.setPage(this.state.page);
      this.setState({ loadingPage: true });
      await this.props.updateUrl();
      try {
        const { data: newTickets } = await api.get(this.props.tickets.apiUrl);

        console.log(newTickets);
        if (newTickets.length === 0) {
          this.setState({ stopPagination: true });
        }

        this.setState({
          tickets: [...this.state.tickets, ...newTickets]
        });
      } catch (err) {
        this.setState({ loadingPage: false });
        console.log(err);
      } finally {
        this.setState({ loadingPage: false });
      }
    }
  };

  render() {
    return (
      <Container>
        <Filter
          apiGet={() => {
            this.apiGet();
          }}
        />
        {this.state.loading ? (
          <Loader type="TailSpin" color="#8bc53f" height="100" width="100" />
        ) : (
          <span />
        )}
        <TicketList ticketList={this.state.tickets} />
        {this.state.loadingPage && !this.state.loading ? (
          <Loader type="TailSpin" color="#8bc53f" height="50" width="50" />
        ) : (
          <span />
        )}
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
