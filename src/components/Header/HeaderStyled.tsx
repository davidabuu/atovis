import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background: var(--primary-color);
  color: #fff;
  .search {
    border: none;
  }
`;

export const ImgStyle = styled.div`
  height: 100vh;
  background: url('./pic1.png') no-repeat;
  background-position: center;
  .img-info {
    padding-top: 300px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    button {
      background-color: #e8ffff;
      width: 200px;
      color: var(--primary-color);
      border-radius: 20px;
      padding: 10px;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
