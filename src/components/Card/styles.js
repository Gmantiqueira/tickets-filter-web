import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #dde1e8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 116px;
  padding: 24px;
  margin: 8px auto;
  max-width: 800px;
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
        margin-right: 8px;
      }
    }
  }
`;
