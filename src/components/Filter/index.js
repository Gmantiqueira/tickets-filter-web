import React, { Component } from "react";

import { Container } from "./styles";

class Filter extends Component {
  // sortBy = e => {
  //   switch (e.target.value) {
  //     case "0":
  //       this.props.apiUrl('orderby="datecreate"');
  //     case "1":
  //       this.props.apiUrl('orderby="dateupdate"');
  //     case "2":
  //       this.props.apiUrl('orderby="score"');
  //   }
  // };

  render() {
    return (
      <Container>
        <form>
          <select /*onChange={>this.sortBy()}*/>
            <option value="0">Data de Criação</option>
            <option value="1">Data de Atualização</option>
            <option value="2">Pontuação</option>
          </select>
        </form>
      </Container>
    );
  }
}

export default Filter;
