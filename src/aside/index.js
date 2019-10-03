import React from 'react';
import './styles.scss';

import Logo from './Logo'
import Cardlist from './Cardlist'
import Footer from './Footer'

const Aside = () => {
  return (
    <div className="aside">
      <Logo />
      <Cardlist />
      <Footer />
    </div>
  )
}

export default Aside
