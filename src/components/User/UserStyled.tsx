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
    font-weight:bold;
    align-items: center;
    justify-content: space-between;
    padding:0 10px;
    color: var(--primary-color);
  }
  .ft{
      margin-top:10px;
  }
  .img{
      width:60px;
  }
  .flex{
      display:grid
      grid-template-columns:
  }
  ///Responsive Design////////////////////////////
  @media (max-width: 770px) {
    margin:1rem 3rem;
  }
`;

export const ProductDetailsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ///Responsive Design////////////////////////////
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
