import styled from 'styled-components';

export const SignStyled = styled.div`
  margin: auto 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 400px;
  }
  .terms {
    margin-left: 5px;
    color: #000;
  }
  .checkbox {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    .img {
      img {
        width: 200px;
      }
      margin-top: 10px;
    }
    form {
      width: 300px;
    }
    .select {
      width: 300px;
    }
  }
  @media (max-width: 400px) {
    margin: auto 10rem;
  }
  a {
    color: var(--primary-color);
    font-weight: bold;
  }
  .dont {
    text-align: center;
  }
`;

export const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  transition: ease all 0.5s;
  .img {
    margin-top: 50px;
  }
  @media (max-width: 500px) {
    .img {
      margin-top: 10px;
    }
  }
`;
export const LogoHolders = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  transition: ease all 0.5s;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5px;
  h1 {
    font-weight: bold;
    font-size: 20px;
    color: var(--primary-color);
  }
  ul {
    margin-top: 5px;
    display: flex;
    width: 500px;
    align-items: center;
    justify-content: space-around;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  li {
    padding-left: 15px;
    list-style: none;
  }
  ///////////////////////////////////////RESPONSIVE DESING/////////////////////
  @media (max-width: 650px) {
    ul {
      width: 400px;
      font-size: 15px;
    }
    a {
      font-size: 12px;
      width: 300px;
    }
  }
`;

export const SideNavStyled = styled.div`
  background: var(--primary-color);
  display: flex;
  width: 250px;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  .color {
    color: #fff;
  }
  li {
    list-style: none;
  }
  div {
    margin-top: 30px;
  }
  ul {
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
  }
  img {
    padding-bottom: 10px;
  }
  li a:hover {
    color: lightblue;
  }
  li a {
    display: flex;
    align-items: center;
    width: 130px;
    color: #fff;
    margin-right: 30px;
    height: 7rem;
    justify-content: space-around;
  }
`;

export const HeaderStyled = styled.div`
  background-color: #f4f4f4;
  border-bottom: 1px solid var(--primary-color);
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  .search {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 600px;
  }
  img,
  .noti {
    padding-left: 20px;
  }
  h1 {
    font-size: 30px;
  }
`;
