import React from 'react';
import FooterDiv from '../Footer/FooterDiv';
// import Header from '../Header/Header';
import Header from '../Header/Header';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <FooterDiv />
    </div>
  );
};

export default Layout;
