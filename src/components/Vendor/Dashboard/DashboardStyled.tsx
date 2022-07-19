import styled from 'styled-components';

export const DashboardStyled = styled.div`
  display: flex;
  background: #f4f4f4;
  .mobile-head,
  .menu-div {
    display: none;
  }
  .head {
    margin-left: 4rem;
  }
  .chart {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
  }
  .cards {
    margin-top: 10px;
    color: var(--primary-color);
    display: flex;
    align-item: center;
    justify-content: space-around;
  }
  @media (max-width: 1200px) {
    .chart {
      width: 80%;
    }
  }
  @media (max-width: 1000px) {
    display: block;
    .mobile-head,
    .menu-div {
      display: inline !important;
    }
    .head {
      margin-left: 0rem;
    }
    .desktop-head {
      display: none !important;
    }
    .cards,
    .chart {
      flex-direction: column;
    }
    .chart {
      margin-left: 2rem;
      justify-content: space-around;
    }
  }
`;

export const CatStyleDash = styled.div`
  .cat {
    background: #ffff;
    padding: 10px;
    display: flex;
    algin-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    h1,
    h2 {
      color: var(--primary-color);
    }
    h1 {
      font-size: 17px;
    }
    .cat-items {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0px;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`;

export const ChartStyle = styled.div`
  background: #ffff;
  padding: 10px;
  border-radius: 10px;
`;
