import styled from 'styled-components';
export const FormGroup = styled.div``
export const LogoHolder = styled.div``
export const LogoHolders = styled.div``
export const SignStyled = styled.div`
  form {
    display: flex;
    border: 1px solid #f4f4f4;
    flex-direction: column;
    justify-content: space-center;
    align-items:center;
    margin: 60px 30rem;
    padding:10px 3rem;
    min-height: 60vh;
    color: var(--primary-color);
    h2 {
      text-align: center;
      color: var(--primary-color);
      font-weight: bold;
    }
    .p{
      font-weight:bold;
    }
    p {
      text-align: center;
    }
    a {
      color: var(--primary-color);
      font-weight: bold;
    }
    .forgot{
      align-self:flex-start;
    }
    input {
      border: none;
      width: 300px;
      border-radius: 25px;
      border: 1px solid var(--primary-color);
      padding: 10px;
      height: 50px;
    }
    .btn {
      width: 300px;
      text-align:center;
      font-weight:bold;
    }
    h3 {
      text-align: center;
      color: var(--primary-color);
      font-weight:bold;
      (--primary-color);
    }
    .btn-sign{
      border: none;
      width: 300px;
      background-color: var(--primary-color);
      text-align:center;
      color: #fff;
      border-radius: 25px;
      border: 1px solid var(--primary-color);
      padding: 10px;
      height: 50px;
    }
    .btn-google-sign{
      display:flex;
      align-items:center;
      justify-content:center;
      border: none;
      width: 300px;
      background-color: var(--button-color);
      color: #fff;
      border-radius: 25px;
      padding: 10px;
      height: 50px;
      p{
        margin-top:10px;
        margin-left:10px;
      }
      img{
        width:20px;
      }
    }
  }

  //Responsive Desgin//////
  @media(max-width:1300px){
    form{
      margin:10px 20rem;
    }
  @media(max-width:800px){
    form{
      margin:10px 10rem;
  }
  @media(max-width:700px){
    form{
      margin:10px 10rem;
      input, .btn-sign, .btn-google-sign{
        width:250px;
      }
    }
  }
  @media(max-width:600px){
    form{
      margin:10px 5rem;
      input, .btn-sign, .btn-google-sign{
        width:250px;
      }
    }
  }
  @media(max-width:400px){
    form{
      margin:10px .5rem;
      input, .btn-sign, .btn-google-sign{
      }
    }
  }
`;
