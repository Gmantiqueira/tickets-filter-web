import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #dde1e8;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: auto;
  min-height: 160px;
  padding: ${props => (props.isOpened ? `0` : `24px`)};
  margin: 8px auto;
  max-width: 800px;
  width: 100%;
  max-height: 1000px;
  overflow: hidden;
  transition: 0.3s ease all;

  ${props => (props.isOpened ? `initial` : `pointer`)};

  &:hover {
    box-shadow: 0px 4px 12px rgba(84, 98, 124, 0.15);
    cursor: ${props => (props.isOpened ? `initial` : `pointer`)};
    border-color: ${props => (props.isOpened ? `#dde1e8` : `#437cdf`)};
  }

  header {
    @media screen and (max-width: 568px) {
      flex-direction: column;
      .datecreated {
        margin-top: 8px;
      }
    }
  }

  header,
  main {
    display: flex;
    flex-wrap: wrap;
    max-height: ${props => (props.isOpened ? `0` : `1000px`)};
    justify-content: space-between;
    opacity: ${props => (props.isOpened ? `0` : `1`)};
    transition: opacity 0.2s ease;
    width: 100%;

    .message {
      flex: 2;
      width: 60%;
      h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .last {
      display: flex;
      flex-wrap: wrap;
      .expert {
        margin-right: 8px;
      }
    }

    .number {
      background-color: #eff1f4;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      padding: 4px 8px;
    }
  }
`;
