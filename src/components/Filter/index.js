import React, { Component } from "react";
import InputMask from "react-input-mask";

import { Container } from "./styles";

class Filter extends Component {
  state = {
    sinceInput: "",
    untilInput: "",
    filterValue: ""
  };

  sortBy = () => {
    let select = document.getElementById("filter");
    this.setState({ filterValue: select.options.selectedIndex });
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
              <option value="0">Data de Criação</option>
              <option value="1">Data de Atualização</option>
              <option value="2">Pontuação</option>
            </select>
          </div>
        </form>
      </Container>
    );
  }
}

export default Filter;
