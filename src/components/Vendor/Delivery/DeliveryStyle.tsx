import styled from 'styled-components';

export const DeliveryCss = styled.div`
  display: flex;
  background: #f4f4f4;
  h1,
  h2 {
    color: var(--primary-color);
  }
  .logistic {
    margin-top: 10px;
    border-radius: 10px;
    background: #ffff;
    padding: 10px;
    img{
      width:30px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--primary-color);
      border-bottom: 1px solid var(--primary-color);
    }
  }
`;

