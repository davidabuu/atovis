import styled from 'styled-components';

export const DashboardStyled = styled.div`
  background-color: #f4f4f4;
  .header {
    position: absolute;
    top: 0;
    left: 250px;
    right: 10px;
  }
  .nav {
    display: flex;
  }
  .cards {
    color: var(--primary-color);
    display: flex;
    justify-content: space-around;
  }
`;
