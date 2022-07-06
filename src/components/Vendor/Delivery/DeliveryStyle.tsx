import styled from 'styled-components';

export const DeliveryCss = styled.div`
  display: flex;
  background: #f4f4f4;
  h1,
  h2 {
    color: var(--primary-color);
  }
  .logistic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-radius: 10px;
    background: #ffff;
    padding: 10px;
    img {
      width: 30px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--primary-color);
      border-bottom: 1px solid var(--primary-color);
    }
  }
`;

export const OrderStyled = styled.div`
  backgroud: #fff;
  padding: 10px;
  border-radius: 10px;
  h3,
  h2 {
    color: var(--primary-color);
  }
  .vendor-orders {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .active-orders {
    background: #f4f4f4;
    padding: 10px;
    .orders {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .id {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
