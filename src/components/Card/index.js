import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import { CardWrapper } from "./styles";
import CardContent from "../CardContent";

class Card extends Component {
  state = {
    isOpened: false
  };

  openCard = () => {
    if (this.state.isOpened) {
      this.setState({ isOpened: false });
    } else {
      this.setState({ isOpened: true });
    }
  };

  componentDidMount() {
    this.formatDate();
  }

  formatDateToMessage = date => {
    let newDate = new Date("2017-12-12 01:25:30");
    let diff = Date.now() - newDate.getTime();
    let diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (diffDays >= 365) {
      let value = Math.floor(diffDays / 365);
      let plural = " ano";
      if (value >= 2) {
        plural = " anos";
      }
      return "Cerca de " + value + plural + " atrás";
    }
    if (diffDays < 365 && diffDays >= 30) {
      let value = Math.floor(diffDays / 30);
      let plural = " mês";
      if (value >= 2) {
        plural = " meses";
      }
      return value + plural + " atrás";
    }
    if (diffDays < 30 && diffDays >= 7) {
      let value = Math.floor(diffDays / 7);
      let plural = " semana";
      if (value >= 2) {
        plural = " semanas";
      }
      return value + plural + " atrás";
    }
  };

  formatDate = date => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth();
    if (month === 0) {
      month = 1;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    console.log(date);
    console.log(month);
    let dateFormated = day + "/" + month + "/" + newDate.getFullYear();

    return dateFormated;
  };

  render() {
    return (
      <CardWrapper
        onClick={!this.state.isOpened && this.openCard}
        isOpened={this.state.isOpened}
      >
        <header>
          <div className="last">
            <div className="expert darker bold">
              <h4>
                {
                  this.props.ticketList.Interactions[
                    this.props.ticketList.Interactions.length - 1
                  ].Sender
                }
              </h4>
            </div>

            <div className="interaction light regular">
              <h4>respondeu em </h4>
            </div>
          </div>

          <div className="datecreated light regular">
            <h4>
              Criado em {this.formatDate(this.props.ticketList.DateCreate)}
            </h4>
          </div>
        </header>

        <CardContent
          formatDate={this.formatDate}
          formatDateToMessage={this.formatDateToMessage}
          ticketList={this.props.ticketList}
          isOpened={this.state.isOpened}
          openCard={this.openCard}
        />
        <main>
          <div className="message dark regular">
            <h4>
              {
                this.props.ticketList.Interactions[
                  this.props.ticketList.Interactions.length - 1
                ].Message
              }
            </h4>
          </div>

          <div className="number normal ">
            <h4>{this.props.ticketList.Interactions.length} interações</h4>
          </div>
        </main>
      </CardWrapper>
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
)(Card);
