import React, { Component } from "react";
import InputMask from "react-input-mask"; 

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import { Container } from "./styles";

class Filter extends Component {

  sortBy = () => {
    let select = document.getElementById("filter");
    this.props.setOrder({ filterValue: select.options.selectedIndex });
    this.props.updateUrl();
  };

  render() {
    return (
      <Container>
        <form>
          <div className="date dark regular">
            <div className="since">
              <InputMask
                type="text"
                id="since"
                mask="99/99/9999"
                onChange={e => {
                  this.setState({ sinceInput: e.target.value });
                }}
              />
            </div>

            <h4>-></h4>

            <div className="until">
              <InputMask
                id="until"
                type="text"
                mask="99/99/9999"
                onChange={e => {
                  this.setState({ untilInput: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="filter">
            <label className="normal regular" for="filter">
              Agrupar por
            </label>
            <select
              name="filter"
              id="filter"
              onChange={() => {
                this.sortBy();
              }}
            >
              <option selected value="datecreate">Data de Criação</option>
              <option value="dateupdate">Data de Atualização</option>
              <option value="score">Pontuação</option>
            </select>
          </div>
        </form>
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
)(Filter);