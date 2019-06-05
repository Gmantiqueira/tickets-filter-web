import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import Card from "../Card";

const TicketList = ({ tickets }) => (
  <Container>
    {tickets.map(ticket => (
      <Card ticket={ticket} />
    ))}
  </Container>
);

export default TicketList;
