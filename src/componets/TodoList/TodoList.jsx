import React from "react";
import TodoListItem from "../TodoList-Item/TodoList-Item";

const TodoList = ({  todos, removeItem, onToggleImpontent,onToggleDone}) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="todu__item list-group-item" key={id}>
        <TodoListItem
          id={id} 
          {...itemProps}
          removeItem={() => removeItem(id)}
          onToggleImpontent={() => onToggleImpontent(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
