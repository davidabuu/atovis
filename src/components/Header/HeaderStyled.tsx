import styled from 'styled-components';
export const HeadStyle = styled.div`
  .mobile-view {
    display: none;
  }
  .cart {
    transform: translateY(10px);
  }
  @media (max-width: 700px) {
    .desktop {
      display: none;
    }
    .mobile-view {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
  }
`;
export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 80px;
  }
  .ul {
    display: none;
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
    p {
      transform: translateY(10px);
    }
  }
  .hand {
    width: 30px;
  }
  .hide {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translate(-20px, 10px);
    transition: ease all 0.5s;
    ul {
      padding: 10px;
      background: #fff;
      display: flex;
      color: var(--primary-color);
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
  }
  a {
    color: var(--primary-color);
    font-weight: bold;
  }
  .user-profile {
    position: absolute;
    display: flex;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.19);
    z-index: 3;
    opacity: 1;
    transform: translate(-20px, 0px);
    text-align: center;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    visibility: visible;
    transition: ease all 0.5s;
    ul {
      padding: 10px;
      background: #fff;
      color: var(--primary-color) !important;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
    a:hover {
      color: var(--button-color) !important;
    }
    li {
      float: left;
      color: var(--primary-color);
    }
  }
  li {
    list-style: none;
    text-align: center;
  }
  @media (max-width: 700px) {
    .searchs,
    .logo {
      display: block;
      margin: 5px 0px;
    }
    .logo {
      text-align: center;
    }
    h3 {
      color: #fff;
      transform: translateY(3px);
    }
    .user-profile {
      transform: translate(-100px, 100px);
      z-index: 5;
    }

    .hide {
      display: none !important;
    }
  }
  @media (max-width: 600px) {
    .flex {
      transform: translateY(5px);
      p {
        transform: translateY(10px);
      }
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
