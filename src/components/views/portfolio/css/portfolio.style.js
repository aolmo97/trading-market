import { css } from "lit";

export const portfolioStyles = css`
  .portfolio-list {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: white;
  }
  .portfolio-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid grey;
  }
  .symbol {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  }
  .change-positive {
    color: #4caf50; /* green */
  }
  .change-negative {
    color: #f44336; /* red */
  }
  .price,
  .shares {
  }
  .price,
  .shares {
    width: 15%;
  }
  .info-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 25%;
  }
  .portfolio-name {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .portfolio-data {
    width: 100%;
    margin-top: 10px;
  }
  .portfolio-total {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .portfolio-total span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
