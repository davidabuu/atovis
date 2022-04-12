import styled from 'styled-components';

export const SignStyled = styled.div`
  margin: auto 5rem;
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
    align-items: center;
    justify-content: space-around;
  }
  li {
    padding-left: 15px;
    list-style: none;
  }
  ///////////////////////////////////////RESPONSIVE DESING/////////////////////
  @media (max-width: 550px) {
    display: none;
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
  justify-content: space-around;
  .search {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
