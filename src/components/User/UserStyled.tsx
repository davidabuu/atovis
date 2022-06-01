import styled from 'styled-components';

export const HomePage = styled.div`
  margin: 2rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img {
    width: 500px;
  }
  img {
    width: 100px;
  }
  @media (max-width: 1400px) {
    .img {
      width: 400px;
    }
    margin: 1rem 3rem;
  }
  ///Responsive Design////////////////////////////
  @media (max-width: 900px) {
    .category {
      display: none;
    }
    .img {
      width: 500px;
    }
    margin: 1rem 3rem;
  }
  @media (max-width: 600px) {
    .category {
      display: none;
    }
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
  width: 500px;
  border-radius: 10px;
  background: #f4f4f4;
  padding: 10px;
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
    width: 150px;
    background: var(--button-color) !important;
    color: #fff !important;
  }
  img{
    width:200px;
  }
  @media (max-width: 1100px) {
    margin: 1rem 1rem;
  }
  @media (max-width: 770px) {
    margin: 1rem 1rem;
    img {
      width: 150px;
    }
  }
`;

export const ProductDetailsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 500px;
    margin-top: 10px;
    object-fit: contain;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
  }
  h1,
  p {
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
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
      font-weight: bold;
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
