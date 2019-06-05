import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #dde1e8;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: ${props => (props.isOpened ? `360px` : `116px`)};
  padding: 24px;
  margin: 8px auto;
  max-width: 800px;
  transition: 0.5s ease all;
  width: 100%;

  header,
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    .last {
      display: flex;
      flex-wrap: wrap;
      .expert {
        font-size: 14px;
        font-weight: bold;
        margin-right: 8px;
      }
      .interaction {
        color: #94a0b6;
        font-size: 14px;
        font-weight: normal;
        line-height: 142%;
      }
    }
  }
`;
