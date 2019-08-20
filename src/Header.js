import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <div className="Logo"> 
        <span className="Logo-title">outli<span className="Logo-title Logo-title--letter">T</span>e</span>
        <span className="Logo-version">v.0.1.0</span> 
      </div>
      <div className="Controls">
        <button className="Controls-btn btn">Export</button>
        <button className="Controls-btn btn">Import</button>
        <button className="Controls-btn btn">Reset</button>
      </div>
    </header>
  )
}

export default Header;