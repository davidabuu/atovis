import styled from 'styled-components';

export const SignStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  input {
    border-radius: 10px;
  }
  .form-control {
    padding: 10px;
    input {
      padding: 6px;
      border: none;
      margin-top: 7px;
      border: 0.5px solid gray;
    }
  }
  label {
    font-size: 20px;
  }
  a {
    color: var(--primary-color);
    font-weight: bold;
  }
  button {
    background-color: var(--primary-color);
    color: #e8ffff;
    padding: 4px;
    width: 150px;
    margin-top: 10px;
  }
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
