import React, { Component } from "react";

import { CardWrapper } from "./styles";

const Card = ({ ticket }) => (
  <CardWrapper>
    <header>
      <div className="last">
        <div class="expert">
          <h4>{ticket.Interactions[ticket.Interactions.length - 1].Sender}</h4>
        </div>

        <div className="interaction">
          <h4>respondeu em </h4>
        </div>
      </div>

      <div className="datecreated">
        <h4>Criado em {ticket.DateCreate}</h4>
      </div>
    </header>

    <main>
      <div class="message">
        <h4>
          {ticket.Interactions[
            ticket.Interactions.length - 1
          ].Message.substring(0, 70)}{" "}
          {ticket.Interactions[ticket.Interactions.length - 1].Message.length >
          40
            ? "..."
            : ""}
        </h4>
      </div>

      <div class="number">
        <h4>{ticket.Interactions.length} interações</h4>
      </div>
    </main>
  </CardWrapper>
);

export default Card;
