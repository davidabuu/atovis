import styled from 'styled-components';

export const OverViewStyle = styled.div`
  background: #ffff;
  border-radius: 10px;
  padding: 10px;
  .over {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const CatStyle = styled.div`
  background: #ffff;
  border-radius: 10px;
  padding: 10px;
`;

export const InevStyled = styled.div`
  display: flex;
  background:#f4f4f4;
  width: 100%;
  .table-div {
    display: flex;
    algin-items: center;
    justify-content: space-between;
    margin-left: 4rem;
    margin-top:10px;
  }
  .product {
    width:600px;
    .p{
        color:var(--primary-color);
        font-weight:bold;
    }
    }
    .promote{
        background:#fff;
        border:1px solid var(--primary-color);
        border-radius:10px;
        padding:10px;
    }
    .add{
        background:var(--primary-color);
        color:#fff;
        padding:10px;
        border-radius:10px;
    }
  }
  .cat{
    margin-top:20px;
  }
  @media(max-width:1200px){
    .table-div{
        flex-direction:column;
        width:630px;
    }
    .over-view{
        margin-left:2rem;
        margin-top:10px;
    }
  }
`;
