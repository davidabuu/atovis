import styled from 'styled-components';
export const DashboardStyled = styled.div`
  display: inline;
  .dash {
    margin-left: 2rem;
  }
  .dash-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const OverViewStyle = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #ffff;
  .sale {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    span {
      width: 30px;
      padding: 30px;
      h3 {
        font-size: 30px;
      }
      .gross {
        background-color:#06C2C2;
      }
      .gross-sale {
        background-color: 
        #C75515;
      }
    }
  }
`;

export const TransactionStyle = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #ffff;
  .tran-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  select {
    background: #f4f4f4;
    border: 1px solid var(--primary-color);
    border-radius: 15px;
    padding: 5px;
  }
`;
export const PieChartStyle = styled.div`
  .pie {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const CatSellStyled = styled.div`
  div {
    margin: 5px 10px;
    p {
      background-color: var(--primary-color);
      color: #ffff;
      padding: 10px;
      clip-path: circle();
      width: 50px;
    }
  }
`;
export const ActiveUserStyle = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #ffff;
  margin-bottom: 10px;
  select {
    background: #f4f4f4;
    border: 1px solid var(--primary-color);
    border-radius: 15px;
    padding: 5px;
  }
`;

export const ActiveFakeDataStyle = styled.div`
  .active-flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      color: var(--primary-color);
    }
  }
`;
