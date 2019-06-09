import React, { Component } from "react";
import InputMask from "react-input-mask";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import { Container } from "./styles";

class Filter extends Component {
  sortBy = async e => {
    let select = document.getElementById("filter");
    let selectValue = select.options[select.options.selectedIndex].value;
    this.props.setOrder(selectValue);
    this.props.updateUrl();
    this.props.apiGet();
  };

  dateValue = e => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace("/", "-");
    if (e.target.attributes["id"].value === "since") {
      this.props.setSince(inputValue);
    }
    if (e.target.attributes["id"].value === "until") {
      this.props.setUntil(inputValue);
    }
    this.props.updateUrl();
  };

  componentDidMount() {
    document.addEventListener("keypress", async event => {
      const keyCode = event.keyCode;
      if (keyCode === 13) {
        await this.props.updateUrl();
        this.props.apiGet();
      }
    });
  }

  render() {
    return (
      <Container>
        <form id="filterForm" action="" method="GET">
          <div className="date dark regular">
            <div className="since">
              <InputMask
                type="text"
                id="since"
                mask="99/99/9999"
                onKeyUp={e => {
                  this.dateValue(e);
                }}
              />
            </div>

            <h4>-></h4>

            <div className="until">
              <InputMask
                id="until"
                type="text"
                mask="99/99/9999"
                onKeyUp={e => {
                  this.dateValue(e);
                }}
              />
            </div>
          </div>

          <div className="filter">
            <label className="normal regular" htmlFor="filter">
              Ordenar por
            </label>
            <select
              name="filter"
              id="filter"
              onChange={() => {
                this.sortBy();
              }}
            >
              <option defaultValue value="datecreate">
                - Data de Criação +
              </option>
              <option defaultValue value="datecreate_reverse">
                + Data de Criação -
              </option>
              <option value="dateupdate">- Data de Atualização +</option>
              <option value="dateupdate_reverse">
                + Data de Atualização -
              </option>
              <option value="score">Menor Prioridade</option>
              <option value="score_reverse">Maior Prioridade</option>
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
