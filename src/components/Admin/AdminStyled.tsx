import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const GeneralStyled = styled.div`
  h1 {
    text-align: center;
    font-size: 20px;
    color: var(--primary-color);
  }
  .gen {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    h1 {
      font-size: 25px;
      font-weigth: bold;
    }
    text-align: center;
  }
`;
