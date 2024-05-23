import React, { useState } from 'react';

const Filter = ({ filterTodo,filter }) => {
  
  const handleFilterClick = (filter) => { //3 фильтр пишиться айди кнопки
    filterTodo(filter);        //4 передаю через пропс айди кнопки 
  };

  const buttons = [
    { id: 'all', label: 'All', class: 'filter__btn-all' },
    { id: 'important', label: 'Important', class: 'filter__btn-impontnet' },  //2 получаю адйи кнопки
    { id: 'done', label: 'Done', class: 'filter__btn-done' },
  ];

  return (
    <div className="filter">
      {buttons.map((button, index) => (
        <button
          key={index}
          id={button.id}
          className={`filter__btn ${button.class} ${filter === button.id ? 'active' : ''}`}  /// 1 уже класс укнопки
          onClick={() => handleFilterClick(button.id)}   //2 нажимаю на кнопку 
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
