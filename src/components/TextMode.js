import React, {useState, useEffect, useRef} from 'react';

const TextMode = (props) => {
  // Hooks
  const [excerpt, setExcerpt] = useState(true);
  const [content, setContent] = useState(true);

  const activeRef = useRef(null);

  useEffect(() => {
    activeRef.current !== null && activeRef.current.scrollIntoView({ block: 'start' });
}, [props.active]);

useEffect(() => {
    activeRef.current !== null && activeRef.current.scrollIntoView({ block: 'center', behavior: "smooth" });
}, [excerpt, content]);


  // Handlers
  const handleCheck = (e) => {
    const checkbox = e.target.name;
    console.log(checkbox);
    if (checkbox === "excerpt") setExcerpt(!excerpt);
    if (checkbox === "content") setContent(!content);
    if (checkbox === "status") {
      const id = parseInt(e.target.closest('.Notepad-item').id, 10);
      const action = "check";
      props.clickHandler(id, action);
    }
  }

  const handleClick = (e) => {
    const id = parseInt(e.target.closest('.Notepad-item').id, 10);
    const action = "card";
    props.clickHandler(id, action);
  }

  const handleEdit = () => {
    props.toCardMode();
  }

  return (
      <main className="TextMode">
        <div className="Controls">
          <label className="Controls-item">
            <input type="checkbox" className="Controls-check" name="excerpt" checked={excerpt} onChange={handleCheck}></input>
            <span className="Controls-pseudoCheck"></span>
            <span className="Controls-text">Краткое содержание</span>
          </label>
          <label className="Controls-item">
            <input type="checkbox" className="Controls-check" name="content" checked={content} onChange={handleCheck}></input>
            <span className="Controls-pseudoCheck"></span>
            <span className="Controls-text">Полный текст</span>
          </label>
        </div>
        <div className="Notepad">
          {
            props.cards.map((card) => {
              return card.id !== 0 &&
              <div 
                key={card.id}            
                className={"Notepad-item" + (props.active.id === card.id ? " isActive" : "") + (card.status ? " isChecked" : "")}                
                id={card.id}
                onClick={handleClick}
                ref={props.active.id === card.id ? activeRef : null}>
                  <header className="Notepad-header">                    
                    <label>
                      <input type="checkbox" className="Controls-check" name="status" checked={card.status} onChange={handleCheck}></input>
                      <span className="Controls-pseudoCheck isStatus"></span>
                    </label>
                    <h3 className="Notepad-title">{card.title}</h3>
                    <span className="Notepad-edit" onClick={handleEdit}>Редактировать</span>
                  </header>
                  
                  {excerpt && <div className="Notepad-excerpt">{card.excerpt}</div>}
                  {content && <div className="Notepad-content">{card.content}</div>}
              </div>
            })
          }
        </div>
      </main>
  )
}

export default TextMode;