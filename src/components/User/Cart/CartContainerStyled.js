import styled from 'styled-components';

export const CartStyle = styled.div`
  background: #f4f4f4;
  padding: 10px;
  h1 {
    text-align: center;
    color: #fff;
    margin: 10px 3rem;
    padding: 10px;
    background-color: var(--primary-color);
  }
  .cart-items {
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
    padding: 10px;
    margin-top: 10px;
    margin: 10px 3rem;

    .qty {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--button-color);
      color: #fff;
      text-align: center;
      border-radius: 5px;
      width: 30px;
    }
    .items {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 70%;
      p {
        transform: translateY(10px);
        color: var(--primary-color);
      }
    }
    .quantity {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 300px;
      font-size: 15px;
    }
  }
  @media (max-width: 650px) {
    img {
      width: 100px;
    }
    .items {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
    h1 {
      font-size: 20px;
    }
    .cart-items {
      .quantity {
        width: 200px;
      }
    }
  }
  @media (max-width: 400px) {
    .cart-items {
      .quantity {
        width: 170px;
      }
    }
  }
`;
