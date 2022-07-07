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
  .mobile-head, .menu-div{
    display:none;
  }
  .head{
    margin-left:4rem;
  }
  .table-div {
    display: flex;
    algin-items: center;
    justify-content: space-evenly;
    margin-top:10px;
  }
  .over-view{
    margin-left:40px;
  }
  .product {
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
  @media(max-width:1000px){
    display:block;
    .mobile-head, .menu-div{
      display:inline !important;
    }
    .head{
      margin-left:0rem;
    }
    .over-view{
      margin-left:0px;
    }
    .desktop-head{
      display:none !important;
    }
    .table-div{
        flex-direction:column-reverse;
        margin:5px .4rem !important;
    }
    .product{
      margin-top:10px;
    }
  }
`;
