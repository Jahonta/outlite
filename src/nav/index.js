import React from 'react';
import './styles.scss';

const Nav = () => {
  return (
    <nav className="Nav">
      <a href="#">Как работать с outlite?</a>
      <a href="#">Настройки проекта</a>
      <div className="Controls">Перейти в текстовый режим</div>  
    </nav>
    
  )
}

export default Nav