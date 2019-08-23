import React from 'react';

const CardListCard = (props) => {
  const handleClick = (e) => {
    if (e.target.nodeName === "INPUT") return;
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
    <li className="CardList-item" id={props.card.id} onClick={handleClick}>
      <button className={"CardList-cardButton btn" + (props.card.id === 0 ? " isNew" : "") + (props.card.status ? " isChecked" : "")}>
        {props.num === 0 ? '' :
        <span className="CardList-cardTitle">{props.num}</span> 
        }
        <span className="CardList-cardTitle">{props.card.title}</span>
        {props.num === 0 ? '' :
        <input 
          type="checkbox"
          className="CardList-check"
          checked={props.card.status}
          onChange={handleChange}
        /> 
        }
      </button>
      <div className={"CardList-cardContent" + ((props.active && props.card.id !== 0) ? " isActive" : "")}>
        {props.card.excerpt}
      </div>

    </li>
  )
}

export default CardListCard;