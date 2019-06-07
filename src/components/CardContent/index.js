import React from "react";

import { ContentWrapper, About, Footer, Content } from "./styles";
import CheckIcon from "../../assets/img/check-icon.png";

class CardContent extends React.Component {
  render() {
    return (
      <ContentWrapper isOpened={this.props.isOpened}>
        <About
          onClick={() => {
            this.props.openCard();
          }}
        >
          <div className="about">
            <div>
              <div className="title-date">
                <h4 className="darker bold">
                  Conversa com {this.props.ticketList.CustomerName}
                </h4>
                <h4 className="light regular">
                  Criado em: {this.props.ticketList.DateCreate}
                </h4>
              </div>
            </div>

            <div className="check">
              <img src={CheckIcon} alt="Check Icon" />
            </div>
          </div>
          <div className="subject bold light">
            <h4>Assunto: {this.props.ticketList.Interactions[0].Subject}</h4>
          </div>
        </About>

        <Content>
          {this.props.ticketList.Interactions.map(interaction => (
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
            Última interação feita em {this.props.ticketList.DateUpdate}
          </h4>
        </Footer>
      </ContentWrapper>
    );
  }
}

export default CardContent;
