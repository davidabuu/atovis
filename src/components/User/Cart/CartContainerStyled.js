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
  .empty {
    display: flex;
    align-items: center;
    min-height: 30vh;
    justify-content: center;
    flex-direction: column;
    div {
      margin-top: 10px;
      font-size: 30px;
    }
  }
  .total-amount {
    h2 {
      color: var(--primary-color);
    }
    display: flex;
    margin: 10px 3rem;
    font-weight: bold;
    justify-content: flex-end;
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
    img {
      width: 200px;
    }
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
    }
    .quantity {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 200px;
      font-size: 15px;
    }
  }
  .items{
    width:700px;
  }
  .price{
    margin:0px;
    font-size:20px;
    color:var(--primary-color);
    font-weight:bold;
  }
  ///Responsive Design
  @media(max-width:1000px){
    .items{
      width:400px;
    }
  }
  @media(max-width:800px){
    .items{
      width:300px;
    }
    .cart-items{
      img{
        width:200px;
      }
    }
  }
  @media(max-width:700px){
    .items{
      width:200px;
    }
    .cart-items{
      img{
        width:150px;
      }
    }
  }
  @media(max-width:480px){
    .price{
      margin:0px;
      font-size:15px;
    }
  }
`;
