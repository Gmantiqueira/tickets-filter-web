import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #dde1e8;
  cursor: pointer;

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
  transition: 0.3s ease all;

  header,
  main {
    display: flex;
    flex-wrap: wrap;
    height: ${props => (props.isOpened ? `0` : `auto`)};
    justify-content: space-between;
    opacity: ${props => (props.isOpened ? `0` : `1`)};
    transition: 0.3s ease all;
    transition: 0.1s ease opacity;
    width: 100%;

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
