import React, { useState} from "react";

const TodoListItem = ({ label, removeItem, onToggleImpontent, onToggleDone, done,important}) => {
 

  return (
    <span className="todu__list-item">
      <span className={`todu__list-label ${done ? 'done' : ''} ${important ? 'important' : ''}`} onClick={() => onToggleDone()}>
        {label}
      </span>
      <button className="todu__item-btn todu__item-delete" onClick={() => removeItem()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="red"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
      <button className="todu__item-btn todu__item-exclamation" onClick={()=>onToggleImpontent()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="green"
          className="bi bi-exclamation"
          viewBox="0 0 16 16"
        >
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z" />
        </svg>
      </button>
    </span>
  );
};

export default TodoListItem;
