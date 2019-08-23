import React, {useState, useEffect} from 'react';

const CardInspector = (props) => {  
  const [title, setTitle] = useState(props.active.title);
  const [excerpt, setExcerpt] = useState(props.active.excerpt);
  const [content, setContent] = useState(props.active.content);

useEffect(() => {
  setTitle(props.active.title);
  setExcerpt(props.active.excerpt);
  setContent(props.active.content);
},
[props.active]
);

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
    id: props.active.id,
    title,
    excerpt,
    content,
    status: props.active.status,
  };
  props.submitHandler(card);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'excerpt':
        setExcerpt(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        break;
    
      default:
        break;
    }
  };

  const handleClick = (e) => {
    const action = e.target.dataset.action;
    if (action === "cancel") {
      setTitle(props.active.title);
      setExcerpt(props.active.excerpt);
      setContent(props.active.content);
      return;
    }
    props.clickHandler(props.active.id, action);
  }

  return (
    <div className="CardInspector">
      <form onSubmit={handleSubmit} className="CardInspector-form">
        
          Заголовок: 
          <input 
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="CardInspector-input"
        />

          Краткое описание: 
        <textarea
          type="text"
          name="excerpt"
          value={excerpt}
          onChange={handleChange}
          className="CardInspector-excerpt"
        />  

          Содержание:
          <textarea
          value={content}
          name="content"
          onChange={handleChange}
          className="CardInspector-content"
        />

        <button 
          type="submit"
          className="btn CardInspector-save">
            Сохранить
          </button>
          <button 
          type="button"
          data-action="cancel"
          className="btn"
          onClick={handleClick}>
            Oтменить
          </button>
          {
            props.active.id !== 0 ? 
              <button 
          type="button"
          data-action="delete"
          className="btn CardInspector-delete"
          onClick={handleClick}>
            Удалить
          </button> : ''
            
          }
          
      </form>          
  </div>
  )
  
}

export default CardInspector;