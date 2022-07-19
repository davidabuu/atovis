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
    width: 120%;
    margin-top: 10px;
  }
  .cards {
    margin-top: 10px;
    color: var(--primary-color);
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
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
    .card {
      flex-direction: column;
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
    .cat-items {
      algin-items: center;
      justify-content: space-between;
    }
  }
`;

export const ChartStyle = styled.div`
  background: #ffff;
  padding: 10px;
  border-radius: 10px;
`;
