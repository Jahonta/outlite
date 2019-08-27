import React from 'react';

const SwitchMode = (props) => {
  return (
    <nav className="SwitchModeLink" onClick={props.toggleMode}>
      <div className={"SwitchModeLink-tab" + (props.mode === 0 ? " isActive" : "")}>
        <button type="button" className="btn switch">Картотека</button>
      </div>
      <div className={"SwitchModeLink-tab" + (props.mode === 1 ? " isActive" : "")}>
        <button type="button" className="btn switch">Блокнот</button>
      </div>
        
    </nav>
  );
}

export default SwitchMode;
