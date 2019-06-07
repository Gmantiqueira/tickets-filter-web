import styled from "styled-components";
import CalendarIcon from "../../assets/img/calendar-icon.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  max-width: 800px;
  width: 100%;

  margin: 64px auto;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 64px;
    align-items: center;
    width: 100%;

    h4 {
      display: block;
      height: 20px;
      margin: 8px;
    }
    .date {
      display: flex;
      min-height: 20px;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        margin-bottom: 16px;
      }
      .since,
      .until {
        position: relative;
        &:after {
          background-image: url(${CalendarIcon});
          content: "";
          display: block;
          height: 20px;
          width: 20px;
          position: absolute;
          top: 8px;
          left: 16px;
        }
      }
    }
    .filter {
      display: flex;
      align-items: center;
      label {
        margin-right: 16px;
      }
    }
    input,
    select,
    option {
      background-color: #fff;
      border: 1px solid #b8c0cf;
      border-radius: 3px;
      font: 400 14px "Nunito";
      height: 36px;
      padding: 8px 16px;
      padding-left: 44px;
      position: relative;
      @media screen and (max-width: 510px) {
        width: 140px;
      }
    }

    select,
    option {
      cursor: pointer;
      padding: 8px 16px;
      text-align: center;
      @media screen and (max-width: 510px) {
        width: 180px;
      }
    }
  }
`;
