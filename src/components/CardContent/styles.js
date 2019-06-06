import styled from "styled-components";

export const ContentWrapper = styled.div`
  cursor: pointer;
  height: ${props => (props.isOpened ? `auto` : `0`)};
  opacity: ${props => (props.isOpened ? `1` : `0`)};

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  margin: 8px auto;
  max-width: 800px;
  transition: 0.5s ease all;
  width: 100%;
  * {
    height: ${props => (props.isOpened ? `auto` : `0`)};
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .about {
    display: flex;
    flex: 1;
    width: 100%;
    > div {
      width: 100%;
    }
    .check {
      align-items: center;
      background-color: #edf2fc;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      height: 36px;
      margin-left: 32px;
      width: 36px;
    }

    .subject {
      width: 100%;
    }
  }
  .title-date {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  h4,
  p {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;

  .message {
    display: flex;
    margin-bottom: 32px;
    width: 100%;

    .photo {
      height: 100%;
      div.img {
        background-color: #eff1f4;
        border-radius: 50%;
        height: 32px;
        margin-right: 16px;
        width: 32px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
      .photo {
        margin-right: 0;
        margin-left: 16px;
      }

      .wrapper {
        background-color: #edf2fc;
      }

      .date {
        text-align: right;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      .wrapper {
        background-color: #eff1f4;
        border-radius: 6px;
        margin-bottom: 8px;
        max-width: 500px;
        padding: 16px;
        width: 100%;
      }

      .date {
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
