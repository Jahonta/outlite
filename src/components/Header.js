import React from 'react';

const Header = (props) => {
  return (
    <header className="Header">
      <div className="Logo"> 
        <span className="Logo-title">outli<span className="Logo-title Logo-title--letter">T</span>e</span>
        <span className="Logo-version">v.0.4.0</span> 
      </div>
      <div className="Controls">
        <button className="Controls-btn btn" type="button" onClick={props.handleExport}>Экспорт</button>
        <label className="Controls-imput">
          <input 
            className="Controls-input"
            type="file"
            accept=".json"
            onChange={(e) => props.handleImport(e.target.files[0])}
          />
          <div className="Controls-btn btn">Импорт</div>
        </label>
        
        <button className="Controls-btn btn" type="button" onClick={props.handleReset}>Сброс</button>
      </div>
    </header>
  )
}

export default Header;