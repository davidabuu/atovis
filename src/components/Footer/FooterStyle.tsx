import styled from 'styled-components';

export const FooterStyle = styled.div`
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  min-height: 200px;
  .footer-sign {
    input {
      width: 350px;
      padding: 10px;
      height: 30px;
      border: none;
      margin-right: 10px;
      background: #fff;
      border-radius: 5px;
    }
    input:focus {
      outline: none;
    }
    button {
      padding: 7px;
      background-color: (--button-color);
      color: #fff;
      border: none;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const FooterDivStyle = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  height: 200px;
  li {
    list-style: none;
  }
  .footer-info {
    ul li {
      margin-top: 10px;
    }
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  .social {
    margin-top: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-around;
  }
`;

export const SignInStyle = styled.div`

`