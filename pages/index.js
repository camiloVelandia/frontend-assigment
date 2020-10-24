import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import GlobalStyle from "../GlobalStyles";

const index = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
};

export default index;