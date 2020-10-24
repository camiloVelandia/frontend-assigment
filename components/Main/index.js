import React from 'react';
import {MainTag} from './style'

import Article from '../Article'
import Aside from '../Aside'

const Main = () => {
  return (
    <MainTag>
      <Article/>
      <Aside/>
    </MainTag>
  );
};

export default Main;