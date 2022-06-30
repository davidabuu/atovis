import styled from 'styled-components';

export const FooterStyle = styled.div`
  background-color: var(--primary-color);
  display: flex;
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
      margin-bottom: 5px;
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

export const MobileStyle = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  a {
    color: #333;
  }
  justify-content: space-around;
  a:hover {
    color: var(--primary-color) !important;
  }
`;
export const FooterDivStyle = styled.div`
  background-color: var(--primary-color);
  padding-left: 2rem;
  color: #fff;
  .img {
    width: 100px;
    margin-top: 15px;
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    list-style: none;
  }
  .footer-info {
    margin-top: 10px;
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
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SignInStyle = styled.div``;
