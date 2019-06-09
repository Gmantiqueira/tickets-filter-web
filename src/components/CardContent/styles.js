import styled from "styled-components";

export const ContentWrapper = styled.div`
  height: auto;
  max-height: ${props => (props.isOpened ? `1000px` : `0`)};
  opacity: ${props => (props.isOpened ? `1` : `0`)};

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  margin: 8px auto;
  max-width: 800px;
  transition: max-height 0.5s ease, opacity 0.2s ease;
  width: 100%;
`;

export const About = styled.div`
  border-bottom: 1px solid #dde1e8;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  transition: border-color ease 0.2s;
  &:hover {
    border-color: #437cdf;
  }
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
    @media screen and (max-width: 568px) {
      flex-direction: column;
    }
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
  max-height: ${props => (props.isOpened ? `0` : `1000px`)};
  transition: max-height 0.5s ease, opacity 0.2s ease;

  .message {
    display: flex;
    padding: 32px 24px;
    margin-bottom: 32px;
    transition: 1s ease padding;
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
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  transition: 0.5s ease all;
`;
