import styled from 'styled-components';

export const HomePage = styled.div`
  margin: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // .img {
  //   width: 500px;
  // }
  // img {
  //   width: 100px;
  // }
  .desktop-card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 400px;
    border-radius: 10px;
    background: #f4f4f4;
    img {
      width: 100px;
    }
  }
  .mobile-card {
    display: none;
  }
  ///Responsive Design////////////////////////////
  @media (max-width: 900px) {
    flex-direction: column;
    .desktop-card {
      display: none;
    }
    .mobile-card {
      margin-top: 10px;
      display: block;
      // display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      //   width: 450px;
      border-radius: 5px;
      width: 450px;
      background: #f4f4f4;
      padding: 20px;
      .card {
        display: flex;
        width: 450px;
        align-items: center;
        justify-content: space-between;
      }
    }
    img {
      width: 500px;
    }
    margin: 1rem 3rem;
  }
  @media (max-width: 600px) {
    .img {
      width: 300px;
    }
    margin: 1rem 3rem;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 400px;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 900px) {
    margin-top: 10px;
    width: 600px;
  }
  .card {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
  @media (max-width: 1300px) {
    width: 400px;
    .card {
      width: 300px;
    }
    padding: 5px;
  }
  @media (max-width: 1000px) {
    width: 350px;
    .card {
      width: 300px;
    }
    padding: 5px;
  }
  @media (max-width: 650px) {
  }
`;

export const FeaturedProductStyled = styled.div`
  background-color: #f4f4f4;
  margin: 2rem 7rem;
  padding: 10px;
  .feature {
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: var(--primary-color);
  }
  .ft {
    margin-top: 10px;
  }
  .but-ton {
    text-align: center;
    padding: 5px;
    margin: 10px 0;
    width: 200px;
    background: var(--button-color) !important;
    color: #fff !important;
  }
  img {
    width: 200px;
  }
  @media (max-width: 1100px) {
    margin: 1rem 1rem;
  }
  @media (max-width: 770px) {
    margin: 1rem 1rem;
    img {
      width: 150px;
    }
    .but-ton {
      width: 150px;
    }
  }
  @media (max-width: 400px) {
    margin: 1rem 0.5rem;
    img {
      width: 140px;
    }
    .but-ton {
      width: 140px;
    }
  }
  @media (max-width: 350px) {
    margin: 1rem 0rem;
    img {
      width: 140px;
    }
    .but-ton {
      width: 140px;
    }
  }
`;

export const ProductDetailsStyled = styled.div`
margin:10px 4rem;
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
.quantity {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  font-size: 15px;
}
h1{
  background-color:var(--primary-color);
  text-align:center;
  color:#fff;
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
.product-info{
  display:flex;
  justify-content:space-around;
  img{
    width:400px;
  }
  .btn-sign{
    border: none;
    width: 300px;
    background-color: var(--primary-color);
    text-align:center;
    color: #fff;
    border-radius: 25px;
    border: 1px solid var(--primary-color);
    padding: 10px;
    height: 50px;
  }
  }
  @media(max-width:1100px){
    margin:10px 2rem;
    .product-info{
      width:100%;
      img{
        width:300px;
      }
    }
    @media(max-width:900px){
      margin:10px 1rem;
    .product-info{
      width:100%;
      img{
        width:250px;
      }
    }
    .btn-sign{
      width:250px;
    }
    @media(max-width:700px){
      .img{
        text-align:center;
        margin-top:10px;
      }
      .header{
        display:none;
      }
      margin:10px 0rem !important;
      .product-info{
        align-items:center;
        flex-direction:column;
        img{
          margin-top:10px;
        }
      }
      .product-details{
        background:#f4f4f4;
        width:100%;
  
        h2{
        color:var(--primary-color);
        margin:0rem !important;
        }
        padding:10px;
        margin-top:10px;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
      }
      .btn{
        text-align:center;
      }
    }
`;
export const AddressStyled = styled.div`
  h1 {
    color: #fff !important;
  }
  .address {
    background-color: var(--button-color);
    padding: 10px;
    color: #fff !important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  span {
    color: var(--primary-color);
    font-weight: bold;
  }
  a {
    color: #fff;
    background: #333;
    padding: 10px;
    border-radius: 10px;
    width: 500px;
  }
  .total {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    justify-content: flex-end;
  }
  .btn-payment {
    text-align: center;
    background: var(--primary-color) !important;
    margin: 10px 0;
    color: #fff !important;
  }
`;
