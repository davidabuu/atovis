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
`;

export const ProductDetailsStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 30vh;
  margin-bottom: 15px;
  width: 80%;
  justify-content: space-around;
  img {
    width: 400px;
    margin-top: 10px;
    object-fit: contain;
  }
  .description {
    text-align: justify;
    font-size: 15px !important;
    width: 350px;
  }
  .qty {
    cursor: pointer;
    font-size: 20px;
    background: var(--button-color);
    color: #fff;
    width: 25px;
    text-align: center;
    border-radius: 5px;
  }
  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70px;
    font-size: 15px;
  }
  h1,
  b,
  .p {
    margin-top: 5px;
    font-size: 25px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    img {
      width: 300px;
    }
  }
  @media (max-width: 770px) {
    justify-content: space-around;
    img {
      width: 200px;
      margin: 0px;
    }
    .description {
      text-align: justify;
      font-size: 15px !important;
      width: 300px;
    }
    h1,
    b,
    .p {
      margin-top: 2px;
      font-size: 15px;
    }
    h1 {
      display: none;
    }
    p {
      width: 200px;
    }
    .btn {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    .description {
      text-align: justify;
      font-size: 15px !important;
      width: 300px;
    }
    justify-content: flex-start;
    .product-info {
      background: #f4f4f4;
      width: 100%;
      margin-top: 5px;
      border-radius-top: 10px;
      padding-left: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      color: var(--primary-color);
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
