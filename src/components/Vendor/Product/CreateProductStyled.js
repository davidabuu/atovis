import styled from 'styled-components';

export const CreateProductStyled = styled.div`
display: flex;
  background:#f4f4f4;
  .mobile-head, .menu-div{
    display:none;
  }
  .head{
    margin-left:4rem;
  }
  form {
    display: flex;
    border: 1px solid var(--primary-color);
    padding: 10px;
    border-radius: 15px;
    align-items: center;
    justify-content: spade-around;
    flex-direction: column;
    margin-top: 30px;
    .file {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 730px;
      margin-bottom: 10px;
      input,
      select,
      textarea {
        background: #f4f4f4;
        border: 1px solid var(--primary-color);
        border-radius: 15px;
        padding: 8px;
        width: 350px;
      }
      input[type='text'],
      select,
      textarea {
        padding: 10px;
      }
    }
  }
  .btn{
    height: 30px !important;
    width:350px;
    margin-bottom:20px;
  }
  .add-product {
    background: var(--primary-color);
    border-radius: 15px;
    width: 100%;
    text-align: center;
    color: #ffff;
    height: 40px !important;
  }
  .a {
    color: var(--primary-color);
    font-weight: bold;
  }
  @media(max-width:1000px){
    display:block;
    .mobile-head, .menu-div{
      display:inline !important;
    }
    .head{
      margin-left:0rem;
    }
    .desktop-head{
      display:none !important;
    }
    form{
      margin:20px 1rem;
    }
    .file{
      input, select, textarea{
        width:400px;
        margin-top:10px;
      }
    }
  @media(max-width:800px){
    form{
      margin:20px 1rem;
    }
    .file{
      width:600px;
      flex-direction:column;
      input, select, textarea{
        width:300px;
        margin-top:10px;
      }
    }
  }
  @media(max-width:500px){
    .file{
      flex-direction:column;
      input, select, textarea{
        width:280px !important;
      }
    }
  }
`;
