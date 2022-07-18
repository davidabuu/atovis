import styled from 'styled-components';

export const NotificationStyle = styled.div`
  margin: 10px 8rem;
  h1 {
    background: var(--primary-color);
    text-align: center;
    padding: 10px;
  }
  p {
    text-align: justify;
  }
  @media(max-width:1200px){
    margin: 10px 1rem;
  }
`;
