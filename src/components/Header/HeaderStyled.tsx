import styled from 'styled-components';
export const HeadStyle = styled.div`
  .mobile-view {
    display: none;
  }
  @media (max-width: 800px) {
    input[type='text'] {
      width: 200px;
      border: none;
    }
    input[type='button'] {
      background-color: var(--button-color);
      color: #fff;
      border: none;
      width: 60px;
    }
  }
  @media (max-width: 700px) {
    .desktop {
      display: none;
    }
    .mobile-view {
      display: block;
    }
  }
`;
export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  img {
    width: 80px;
  }
  background: var(--primary-color);
  color: #fff;
  p {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
    color: #fff;
  }
  @media (max-width: 600px) {
    .flex {
      transform: translateY(5px);
    }
  }
`;

export const ImgStyle = styled.div`
  height: 100vh;
  background: url('/pic1.png') no-repeat;
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
  @media (max-width: 912px) {
    h1 {
      font-size: 25px;
    }
    width: 100%;
    height: 50vh;
  }
  @media (max-width: 540px) {
    h1 {
      font-size: 20px;
    }
    height: 90vh;
  }
  @media (max-width: 400px) {
    height: 60vh;
    h1 {
      font-size: 18px;
    }
    .img-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 400px;
      padding-bottom: 170px;
    }
  }
`;
