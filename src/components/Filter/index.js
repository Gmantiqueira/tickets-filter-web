import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import Card from "../Card";

const Filter = ({ tickets }) => (
  <Container>
    <form>
      <select>
        <option value="0">Data de Criação</option>
        <option value="1">Data de Atualização</option>
        <option value="2">Pontuação</option>
      </select>
    </form>
  </Container>
);

export default Filter;
