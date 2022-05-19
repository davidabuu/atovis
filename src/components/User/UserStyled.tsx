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
  ///Responsive Design////////////////////////////
  @media (max-width: 800px) {
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
  @media (max-width: 770px) {
    margin: 1rem 1rem;
    img {
      width: 150px;
    }
  }
  @media (max-width: 500px) {
  }
`;

export const ProductDetailsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 500px;
    margin-top: 10px;
    object-fit: cover;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  h1,
  p {
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 770px) {
    flex-direction: column;
    img {
      width: 300px;
    }
    h1,
    p {
      margin-top: 10px;
      font-size: 25px;
      font-weight: bold;
    }
  }
`;
