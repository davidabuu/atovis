import styled from 'styled-components';

export const DeliveryCss = styled.div`
  display: flex;
  background: #f4f4f4;
  .logistic {
    display: flex;
    h1,
    h2 {
      color: var(--primary-color);
    }
    justify-content: space-between;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    .img {
      width: 100px;
    }
    .logistic-div {
      background: #ffff;
      padding: 10px;
      border-radius: 10px;
      margin-top: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 0.25px solid var(--primary-color);
      border-bottom: 0.25px solid var(--primary-color);
    }
  }
  .mobile-head,
  .menu-div {
    display: none;
  }
  .head {
    margin-left: 4rem;
  }
  .chart {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    .logistic{
      flex-direction:column;
      img{
        width:470px;
      }
    }
    @media (max-width: 900px) {
      h2{
        font-size:15px;
      }
      .logistic{
        flex-direction:column;
        img{
          width:350px;
        }
        .img{
          width:60px;
        }
    }
    }
`;

export const OrderStyled = styled.div`
  background: #fff;
  margin-left: 1rem;
  padding: 10px;
  border-radius: 10px;
  h3,
  h2 {
    color: var(--primary-color);
  }
  select {
    background: #f4f4f4;
    border: 1px solid var(--primary-color);
    border-radius: 15px;
    padding: 5px;
  }
  .vendor-orders {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .active-orders {
    background: #f4f4f4;
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0px;
    .orders {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .id {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 1200px) {
    .orders {
      .id {
        width: 700px !important;
      }
    }
  }
  @media (max-width: 900px) {
    margin-top: 10px;
    margin-left: 0;
    .orders {
      .id {
        width: 400px !important;
      }
    }
  }
  @media (max-width: 500px) {
    .orders {
      .id {
        width: 300px !important;
      }
    }
  }
`;
export const MobileHeadNavStyled = styled.div`
  .nav-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 2rem;
    .icon {
      margin-top: 30px;
    }
  }
  @media (max-width: 900px) {
    .logo {
      height: 50px;
    }
  }
`;
