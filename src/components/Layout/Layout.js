import React from 'react';
import FooterDiv from '../Footer/FooterDiv';
// import Header from '../Header/Header';
import Header from '../Header/Header';
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      <div className='foot'>
      <FooterDiv />
      </div>
    </div>
  );
};

export default Layout;
