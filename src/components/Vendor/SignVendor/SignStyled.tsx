import styled from 'styled-components';

export const SignStyled = styled.div`
  margin: auto 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoHolder = styled.div`
  display: flex;
  margin: 1rem 3rem;
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
