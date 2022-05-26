import styled from 'styled-components';

export const AccountStyled = styled.div`
  background-color: #f4f4f4;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  li {
    list-style: none;
    color: #000;
    font-weight: bold;
  }
  .profile {
    background-color: #fff;
    margin-left: 3rem;
    border-radius: 5px;
    width: 400px;
    height: 195px;
    margin-bottom: 10px;
    border: 1px solid var(--primary-color);
  }
  a {
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-color);
  }
  .arrow {
    color: #000;
    font-size: 20px;
  }
  a:hover {
    background-color: #f4f4f4;
  }
`;
