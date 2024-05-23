import React, { useState } from 'react';

const Input = ({ createTodoItem }) => {

    const [text, setText] = useState('');

 
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault(); 
        if (text.trim() !== '') {   // текст не явлиеться пустым и нету только одних пробелов 
            createTodoItem(text.trim()); // Передаем текст в функцию addItem
            setText(''); // Очищаем поле ввода после добавления задачи
           
        }
    };

    

    return (
        <div className='todoList__wrapper'>
            <form  className='todoList__form' onSubmit={handleClick}>
            <input
                className='todoList__text'
                type='text'
                placeholder='Введите текст'
                value={text}
                onChange={handleChange} // Обработчик изменений в поле ввода
            />
            <button className='todoList__btn' onClick={handleClick}>Записать задание</button>
            </form>
        </div>
        
    );
};

export default Input;
