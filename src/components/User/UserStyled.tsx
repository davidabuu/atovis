import styled from 'styled-components';

export const HomePage = styled.div`
  margin: 2rem 4rem;
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
      border-radius: 10px;
      background: #f4f4f4;
      padding: 20px;
      .card {
        display: flex;
        width: 400px;
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
    .card {
      width: 200px;
    }
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
  min-height: 60vh;
  justify-content: space-around;
  img {
    width: 400px;
    margin-top: 10px;
    object-fit: contain;
  }
  p {
    text-align: justify;
    font-size: 15px !important;
    width: 350px;
  }
  .qty {
    cursor:pointer;
    font-size: 25px;
    background: var(--primary-color);
    color: #fff;
    width:40px;
    text-align:center;
    border-radius:5px;
  }
  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    font-size:15px;
  }
  h1,
  p {
    margin-top: 10px;
    font-size: 25px;
  }
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img {
      width: 300px;
    }
    h1,
    p {
      margin-top: 10px;
      font-size: 20px;
    }
    .btn {
      margin-bottom: 10px;
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
