import React, {useState, useEffect} from 'react';

const CardInspector = (props) => {  
  // Hooks
  const [title, setTitle] = useState(props.active.title);
  const [excerpt, setExcerpt] = useState(props.active.excerpt);
  const [content, setContent] = useState(props.active.content);
  const [saved, setSaved] = useState(true);

useEffect(() => {
  setTitle(props.active.title);
  setExcerpt(props.active.excerpt);
  setContent(props.active.content);
},
[props.active]
);

// Data
const card = {
    id: props.active.id,
    title,
    excerpt,
    content,
    status: props.active.status,
};


const autosave = () => {
  if (props.active.id === 0) return;
  props.submitHandler(card);
  setSaved(true)
};

// Handlers
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
    switch (action) {
      case 'cancel':
        setTitle(props.active.title);
        setExcerpt(props.active.excerpt);
        setContent(props.active.content);
        break;
      case 'create':
        e.preventDefault();
        props.submitHandler(card);
        setSaved(true)
        break;

      default:
        props.clickHandler(props.active.id, action);
        break;
  }
  }

  return (
    <div className="CardInspector">
      <div className="CardInspector-title">
        <span className={"CardInspector-saved" + (saved ? "" : " isNot")} title={(saved ? "Сохранено" : "Есть несохраненные данные")}></span>
        <span>{title}</span>
      </div>
      <form className="CardInspector-form">
        
          Заголовок: 
          <input 
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          onBlur={() => autosave()}
          className="CardInspector-input"
          required={true}
        />
{
          props.active.id !== 0 ? 
          <>
          Краткое описание: 
        <textarea
          type="text"
          name="excerpt"
          value={excerpt}
          onChange={handleChange}
          onBlur={() => autosave()}
          className="CardInspector-excerpt"
        />  

          Полный текст:
          <textarea
          value={content}
          name="content"
          onChange={handleChange}
          onBlur={() => autosave()}
          className="CardInspector-content"
        />

          
              <button 
          type="button"
          data-action="delete"
          className="btn CardInspector-delete"
          onClick={handleClick}>
            Удалить
          </button> 
          </> : 
          <div className="CardInspector-btnBox">
          <button 
          type="submit"
          data-action="create"
          className="btn CardInspector-create"
          onClick={handleClick}>
            Создать
          </button>
          <button 
            type="reset"
            data-action="cancel"
            className="btn CardInspector-cancel"
            onClick={handleClick}>
            Отмена
          </button>
          </div>        
          }
          
      </form>          
  </div>
  )
  
}

export default CardInspector;