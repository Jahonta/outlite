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
    <li className={"CardList-item" + (props.card.status ? " isChecked" : "")} id={props.card.id}>
      <span className="CardList-cardNum">{props.num}</span> 
      <button className="CardList-cardButton" type="button" onClick={handleClick}>
        <span className="CardList-cardTitle">{props.card.title}</span>
      </button>
      <label className="CardList-check" title="Done!">
        <input 
          className="CardList-input"
          type="checkbox"
          checked={props.card.status}
          onChange={handleChange}
        />
        <span className="CardList-pseudoCheck"></span>
      </label>      
    </li>
  )
}

export default CardListCard;