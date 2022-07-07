import styled from 'styled-components';

export const DashboardStyled = styled.div`
display: flex;
background:#f4f4f4;
.mobile-head, .menu-div{
  display:none;
}
.head{
  margin-left:4rem;
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
}
  .cards {
    color: var(--primary-color);
    display: flex;
    justify-content: space-around;
  }
`;

export const CatStyleDash = styled.div`
  background: #ffff;
  padding: 10px;
  display: flex;
  algin-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  h1,
  h2 {
    color: var(--primary-color);
  }
  .cat-items {
    algin-items: center;
    justify-content: space-between;
    .div {
      width: 400px;
      background: ash;
    }
    .inner-div {
      width: 300px;
    }
  }
`;
