import styled from 'styled-components';

export const CardStyled = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  height: 170px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  .info {
    color: var(--primary-color);
    background: #f4f4f4;
    text-align: center;
    padding: 20px;
    font-size: 25px;
  }
`;
