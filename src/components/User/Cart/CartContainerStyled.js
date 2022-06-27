import styled from 'styled-components';

export const CartStyle = styled.div`
  background: #f4f4f4;
  padding: 10px;
  .h1 {
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
  .cart-btn{
    text-align:center;
  }
  .cart-btns{
    border: none;
    width: 200px;
    background-color: var(--primary-color);
    text-align:center;
    color: #fff;
    border-radius: 25px;
    border: 1px solid var(--primary-color);
    padding: 10px;
    height: 50px;
  }
  .price{
    margin:0px;
    font-size:20px;
    color:var(--primary-color);
    font-weight:bold;
  }
  .mobile-cart{
    display:none;
  }
  .delete{
    display:flex;
    align-items:center;
   // justify-content:center;
    p{
      margin-top:5px;
    }
  }
  @media(max-width:850px){
    margin:10px 0rem;
    padding:0px;
    h1{
      margin:10px 0px;
    }
    .desktop-cart{
      display:none;
    }
    .mobile-cart{
      display:block;
    }
    .header{
      display:none;
    }
  }
  @media(max-width:600px){
    .cart-items{
      justify-content:space-between;
      margin: 10px 5px;
      img{
        width:200px;
      }
    }
    .cart-btns{
      width: 200px;
      margin-top:5px;
      height:40px;
      padding:0px;
    }
  }
  @media(max-width:400px){
    .cart-items{
   
      img{
        width:150px;
      }
    }
  }
`;

export const MobileCartStyle = styled.div`
  .cart-items {
  }
  .quantity {
    width: 100px;
  }
  .img {
    text-align: center;
    margin-bottom: 10px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    background-color: var(--primary-color);
    p {
      font-size: 20px;
      padding-top: 10px;
    }
    .p {
      transform: translateX(-50px);
    }
  }
`;
