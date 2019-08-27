import React from 'react';

const NewCard = (props) => {
  const handleClick = () => {
    const id = 0;
    const action = "card";
    props.onClick(id, action);
  };
  return (
      <button className={"CardList-cardButton btn isNew"} onClick={handleClick}>
        {props.card.title}
      </button>
  );
}

export default NewCard;