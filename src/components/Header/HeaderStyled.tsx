import styled from 'styled-components';
export const HeadStyle = styled.div`
  .desktop {
    .sign {
      color: #fff !important;
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-2px);
    }
    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(14px);
      p {
        background: var(--button-color);
        color: var(--primary-color);
        font-size: 15px;
        clip-path: circle();
        width: 20px;
      }
    }
  }
  @media (max-width: 700px) {
    .desktop {
      display: none;
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
  .search-product {
    display: flex;
    background-color: #fff;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    .text {
      width: 500px;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      border: none;
      border-radius-left: 10px;
      padding: 5px;
      height: 40px;
    }
    .search-button {
      border: none;
      border-radius: 15px;

      color: #fff;
      height: 40px;
      width: 100px;
      background: var(--button-color);
    }
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
    transform: translate(12px, 0px);
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
  @media (max-width: 950px) {
    .search-product {
      .text {
        width: 300px;
      }
    }
  }
  @media (max-width: 850px) {
    .search-product {
      margin-top: 10px;
      .text {
        width: 200px;
      }
    }
    .logo {
      display: block;
      margin: 5px 0px;
    }
    .logo {
      text-align: center;
    }
    h3 {
      color: #fff;
      transform: translateY(8px);
      font-size: 20px;
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

export const MobileStyled = styled.div`
  display: none !important;
  @media (max-width: 700px) {
    .mobile-view{
      margin:0px !important;
      background:var(--primary-color);
      .sign{
        color:#fff;
        display:flex;
        padding-left:20px;
        font-size:20px;
        cursor:pointer;
       // justify-content:center;
        p{
          transform:translateY(5px);
        }
        .person{
          transform:translateY(10px); 
        }
        a{
          color:#fff;
          
        }
      }
      .flexs{
      color:#fff !important;
      display:flex;
      align-items:center;
      padding-left:10px;
      h3{
        font-size:25px;
        color:#fff;
      }
      }
    }
    display: block !important;
    .img{
      text-align:center;
      margin-top:10px;
    }
    .search-product {
      display:flex;
      margin-left:10px;
      align-items:center;
      .cart{
        margin-top:15px;
      }
    }
    .cart{
      display:flex;
      align-items:center;
      justify-content:center;
      color:var(--primary-color);
      background:#f4f4f4;
      padding:2px;
      border-radius:15px;
      margin-left:5px;
    }
      .text {
        width: 300px;
        background-color: #f4f4f4;
        border: 1.5px solid var(--primary-color) !important;
        border-radius: 15px;
        border: none;
        padding-left: 5px;
        height: 39px;
      }
      .text:hover:focus {
        outline: none;
      }
      .search-button {
        border: none;
        color: #fff;
        height: 39.7px;
        width: 100px;
        background: var(--button-color);
      }
    }
  }
  @media(max-width:500px){
    .search-product{
      width:300px;
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
    h1{
      color:#fff;
    }
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
