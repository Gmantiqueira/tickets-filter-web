import React from "react";

import { ContentWrapper, About, Footer, Content } from "./styles";
import CheckIcon from "../../assets/img/check-icon.png";

const CardContent = ({ ticket, isOpened }) => (
  <ContentWrapper isOpened={isOpened}>
    <About>
      <div className="about">
        <div>
          <div className="title-date">
            <h4>Conversa com {ticket.CustomerName}</h4>
            <p>Criado em: {ticket.DateCreate}</p>
          </div>
        </div>

        <div className="check">
          <img src={CheckIcon} alt="Check Icon" />
        </div>
      </div>
      <div className="subject bold light">
        <h4>Assunto: {ticket.Interactions[0].Subject}</h4>
      </div>
    </About>

    <Content>
      {ticket.Interactions.map(interaction => (
        <div className="message">
          <div className="photo">
            <div className="img" />
          </div>

          <div className="content">
            <div className="wrapper">
              <h4 className="bold darker">{interaction.Message}</h4>
            </div>
            <div className="date">
              <p class="semibold light">{interaction.DateCreate}</p>
            </div>
          </div>
        </div>
      ))}
    </Content>

    <Footer>
      <h4 class="semibold light">
        Última interação feita em {ticket.DateUpdate}
      </h4>
    </Footer>
  </ContentWrapper>
);

export default CardContent;
