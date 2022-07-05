import styled from 'styled-components';

export const OverViewStyle = styled.div`
  background: #ffff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  .over {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const CatStyle = styled.div`
  background: #ffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 10px;
`;

export const InevStyled = styled.div`
  display: flex;
  background:#f4f4f4;
  width: 100%;
  .mobile-head{
    display:none;
  }
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
  @media(max-width:800px){
    .table-div{
        flex-direction:column;
        width:400px;
    }
    .product{
        width:400px;
    }
    .over-view{
        margin-left:2rem;
        margin-top:10px;
    }
  }
  @media(max-width:700px){
    .mobile-head{
      display:block !important;
    }
    .desktop-head, .nav{
      display:none !important;
    }
    .nav{
      transform:translateX(-200px);
    }

  }
  @media(max-width:400px){
    .table-div{
        margin:0px;
        flex-direction:column;
        width:350px;
    }
    .product{
        width:350px;
    }
    .over-view{
        margin-left:.5rem;
        margin-top:10px;
    }
  }
`;
