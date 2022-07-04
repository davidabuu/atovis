import styled from 'styled-components';
export const FormGroup = styled.div``;
export const LogoHolder = styled.div``;
export const LogoHolders = styled.div``;
export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  margin-left: 4rem;
  border-bottom: 2px solid var(--primary-color);
  .search-button {
    border: none;
    border-radius: 15px;
    color: #333;
    height: 40px;
    padding-left: 10px;
    width: 300px;
    margin-right: 10px;
    background: #fff;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media (max-width: 1200px) {
    width: 600px;
  }
`;
export const VendorStyle = styled.div`
  background-color: #f4f4f4;
  height: 100vh;
  color: var(--primary-color);
  h2,
  a {
    color: var(--primary-color);
  }
  .summary,
  .img {
    margin: 0px 4rem;
  }
  .vendor {
    display: flex;
    padding: 10px;
    margin: 0px 4rem;
    background-color: #ffff;
    justify-content: space-around;
  }
  .btn {
    width: 300px;
    text-align: center;
    font-weight: bold;
    margin: 10px 4rem;
  }
  .btn-sign {
    border: none;
    width: 300px;
    background-color: var(--primary-color);
    text-align: center;
    color: #fff;
    border-radius: 25px;
    border: 1px solid var(--primary-color);
    padding: 10px;
    height: 50px;
  }
  p {
    border-bottom: 1px solid var(--primary-color);
  }
  @media (max-width: 700px) {
    margin: 0px 5px;
    .summary,
    .img {
      margin: 0px 5rem;
    }
    .vendor {
      flex-direction: column;
      margin: 10px;
    }
    h2 {
      font-size: 18px;
    }
    .btn {
      margin: 7px 5px;
    }
  }
`;
export const SignStyled = styled.div`
.img{
  text-align:center;
}
  form {
    display: flex;
    border: 1px solid #f4f4f4;
    flex-direction: column;
    justify-content: space-center;
    align-items:center;
    margin: 30px 30rem;
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
      text-align:center;
    }
    input, select, textarea {
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
      margin:10px 10rem;
    }
  @media(max-width:800px){
    form{
      margin:10px 10rem;
  }
  @media(max-width:700px){
    form{
      margin:10px 5rem;
      input, .btn-sign, .btn-google-sign{
        width:300px;
      }
    }
  }
  @media(max-width:600px){
    form{
      margin:10px 5rem;
      input, select, .btn-sign, .btn-google-sign{
        width:300px;
      }
    }
  }
  @media(max-width:400px){
    form{
      margin:10px 10px;
    }
  }
`;

export const ForgotStyled = styled.div`
form {
  display: flex;
  border: 1px solid #f4f4f4;
  flex-direction: column;
  justify-content: space-center;
  align-items:center;
  margin: 100px 30rem;
  padding:10px 3rem;
  min-height: 0vh;
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
    text-align:center;
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
    margin:10px 10rem;
  }
@media(max-width:800px){
  form{
    margin:10px 10rem;
}
@media(max-width:700px){
  form{
    margin:10px 5rem;
    input, .btn-sign, .btn-google-sign{
      width:300px;
    }
  }
}
@media(max-width:600px){
  form{
    margin:10px 5rem;
    input, .btn-sign, .btn-google-sign{
      width:300px;
    }
  }
}
@media(max-width:400px){
  form{
    margin:10px 10px;
  }
}
`;

export const SideNavStyled = styled.div`
  background: var(--primary-color);
  width: 200px;
  text-align: center;
  display: flex;
  align-item: center;
  flex-direction: column;
  .img {
    //padding-left: 2rem;
  }
  ul {
    list-style: none;
    display: flex;
    align-item: center;
    justify-content: space-around;
    flex-direction: column;
    min-height: 100vh;
  }
  a {
    color: #fff;
    display: flex;
    justify-content: space-around;
    width: 100px;
  }
  a:hover {
    background: #fff;
    color: var(--primary-color);
  }
  .menu{
    display:none;
  }
  @media(max-width:700px){
    position:absolute;
    transform:translateX(-200px);
    transition:all 0.5s ease;
    opacity:0;
    .show{
      transform:translateX(200px);
      transition:all 0.5s ease;
      opacity:1;
      z-index:3;
    }
  }
`;
