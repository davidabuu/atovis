import styled from 'styled-components';

export const CreateProductStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  input[type='file'] {
    border: none;
    width: 30%;
    border-radius: 25px;
    border: 1px solid var(--primary-color);
    padding: 10px;
    height: 10%;
  }
  .input-product, select {
    width: 300px;
    border-radius: 25px;
    border: 1px solid var(--primary-color);
    padding: 10px;
    height: 10%;
  }
  .product-info-one {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    input[type='number']{
      width: 50px;
      border-radius: 15px;
      border: 1px solid var(--primary-color);
      padding: 5px;
      height: 3%;
    }
  }
  .product-info-two, .price-div, .fee-div{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .price-div{
    input{
      width: 50%;
      border-radius: 15px;
      border: 1px solid var(--primary-color);
      padding: 5px;
      height: 10%;
    }
  }
`;
