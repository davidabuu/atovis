import styled from 'styled-components';

export const LandingStyled = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  img{
    margin-bottom:10px;
  }
  background-color: var(--primary-color);
  a{
    transition: ease 0.5s all;
  }
`;
