import React from 'react';

const CardListCard = (props) => {
  const handleClick = (e) => {
    const id = parseInt(e.target.closest('.CardList-item').id);
    const action = "card";
    props.onClick(id, action);
  };

  const handleChange = (e) => {
    const id = parseInt(e.target.closest('.CardList-item').id);
    const action = "check";
    props.onClick(id, action);
  }

  return (
    <li className={"CardList-item" + (props.card.status ? " isChecked" : "") + (props.active ? " isActive" : "")} id={props.card.id} onClick={handleClick}>     
      <button className="CardList-cardButton" type="button">
        <span className="CardList-cardNum">{props.num}</span> 
        <span className="CardList-cardTitle">{props.card.title}</span>
        <label className="CardList-check" title="Done!">
          <input 
            className="CardList-input"
            type="checkbox"
            checked={props.card.status}
            onChange={handleChange}
          />
          <span className="CardList-pseudoCheck"></span>
      </label>
      </button>          
    </li>
  )
}

export default CardListCard;