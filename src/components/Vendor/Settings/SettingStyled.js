import styled from 'styled-components';

export const SettingStyled = styled.div`
  display: flex;
  background: #f4f4f4;
  .mobile-head,
  .menu-div {
    display: none;
  }
  .head {
    margin-left: 4rem;
  }
  form {
    display: flex;
    border: 1px solid var(--primary-color);
    padding: 10px;
    border-radius: 15px;
    align-items: center;
    justify-content: spade-around;
    flex-direction: column;
    height: 500px;
    margin-left: 20rem;
    margin-top: 30px;
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
    .btn {
      border: none;
      width: 350px;
      background-color: var(--primary-color);
      text-align: center;
      color: #fff;
      border-radius: 25px;
      border: 1px solid var(--primary-color);
      padding: 10px;
      height: 40px;
    }
  }
  .remove {
    background: red;
    border-radius: 15px;
    width: 350px;
    text-align: center;
    color: #ffff;
    height: 40px;
  }
  .a {
    color: var(--primary-color);
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    flex-direction: column !important;
    form {
      margin: 0.5rem 2rem;
      input,
      select,
      textarea,
      .btn, .remove {
        width: 250px;
      }
    }
  }
`;
