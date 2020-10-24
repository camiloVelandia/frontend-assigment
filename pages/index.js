import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Main from '../components/Main';
import GlobalStyle from "../GlobalStyles";

const index = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default index;