import styled from 'styled-components';

export const CardStyled = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  height: 170px;
  text-align: center;
  width: 250px;
  margin: 10px 0.5rem;
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
  @media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    margin: 5px 0rem;
  }
  @media (max-width: 400px) {
    width: 80%;
    margin-left: 2rem;
  }
`;
