import React, { useState, useEffect } from "react";
import Header from "./componets/Header/Header";
import Status from "./componets/Status/Status";
import Search from "./componets/Search/Search";
import Filter from "./componets/Filter/Filter";
import Input from "./componets/Input/Input";
import TodoList from "./componets/TodoList/TodoList";


function App() {
  const [todoData, setTodoData] = useState([]);
  const [originalTodoData, setOriginalTodoData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() =>{
    // Имитируем загрузку задач из API или хранилища
  const storedTodoData = [
      { label: 'обрекос, винаград, кукуруза', important: false, done: false, id: 1 },
      { label: 'нога рука голова', important: false, done: false, id: 2 },
      { label: 'реакт вью ангуляр', important: false, done: false, id: 3 }
    ];

    setTodoData(storedTodoData); // функция обновления состояния setTodoData передаю масив  storedTodoData задачами
    setOriginalTodoData(storedTodoData); // функция обновления состояния setOriginalTodoData передаю масив  storedTodoData задачами */
  }, []);

  const createTodoItem = (newLabel) =>{
    const newTodo = {
      label: newLabel,
      important: false,
      done: false,
      id: originalTodoData.length + 1
    };

    setTodoData([...todoData, newTodo]);
    setOriginalTodoData([...originalTodoData, newTodo]);
  };


  
  const search = (searchText) =>{  //searchText переменую  что записал импут 
    const filteredTodoData = originalTodoData.filter(item =>    // дальше прохожу по состоянию originalTodoData проверяю каждого item label
      item.label.toLowerCase().startsWith(searchText.toLowerCase())  // item.label.переобразовую к нижнему регистру startsWith проверяю начинаеться
                                                            //начинаеться строка с под строки потом 
    );
    setTodoData(filteredTodoData);      // запицывую в функцию для обновления состояния setTodoData(filteredTodoData) переменую результата фильтра
  };

  //передаю в пропс в компонет функци sersh 


  const removeItem = (id) =>{ //передаю айди елемента на который нажал 
 // переменую updatedTodoData фильтрую  из todoData состояния  если айтем состоянии которм айди не равно айди который кликнул
    const updatedTodoData = todoData.filter(item =>item.id !== id);  
    //то тогда fiter true  и фильтр записывает переменую  updatedTodoData
    setTodoData(updatedTodoData);  //обновляющию функцию для состояния  записываю результат фильтра который записан переменую updatedTodoData
    setOriginalTodoData(originalTodoData.filter(item =>item.id !== id));
  };

  const onToggleImpontent = (id) =>{ //передаю айди елемента на который нажал 
    const updatedTodoData = todoData.map(item =>  // updatedTodoData записую васив тот айди который равно айди айтему по которому нажал
      item.id === id ? { ...item, important: !item.important } : item  //если результат тру айтем айди равно тому айди который я получил
                                                                       // то айтем сохраняет в обьект импонетнт меня его фолс на тру или на оборот

    );
    setTodoData(updatedTodoData);   // /обновляющию функцию для состояния  записываю результат nap 
    setOriginalTodoData(updatedTodoData);
  };

  const onToggleDone = (id) =>{   // получаю айди того текса там де выполнено 
    const updatedTodoData = todoData.map(item =>  // перебираю мап так мне нужно получить тоже количество  елементов масива
      item.id === id ? { ...item, done: !item.done } : item   //если айди  нажатого емелемнта равно айди елемента текст  тогда я ему меня 
      //done true на фол и на оборот если тру то будет класс добавляться если фолс убараться 
    );
    setTodoData(updatedTodoData);         //обновляющую функцию состояния добавляю результ мап 
    setOriginalTodoData(updatedTodoData);
  };

  const doneLength = () =>{   
    return todoData.filter(item =>item.done).length; // все задания их длина 
  };
  
                   /*    поллучаю айди конпки из компонета filter */
  const filterTodo = (filterType) =>{

    let filteredData = [];
  
    if (filterType === 'all') {
      filteredData = originalTodoData; // если all то записываю масив состояние originalTodoData
    } else if (filterType === 'important') {
      filteredData = originalTodoData.filter(item =>item.important); // если important  то фильтрую состояние originalTodoData и всее что
                                                                      //айтем.important записываю  filterType

    } else if (filterType === 'done') {;  // если done  то фильтрую состояние originalTodoData и всее что
                                        //айтем.done записываю  filterType
      filteredData = originalTodoData.filter(item =>item.done); //
    }
    
    setTodoData(filteredData); //функцию обновления состояния  setTodoData я записываю масив результат filteredData
    setFilter(filterType);   // функцию обновления состояния  передаю айди кнопки
  };

  return (
    <div className="App">
      <div className="container">
        <div className="todoList">
          <div className="todoList__wrapper">
            <Header />
            <Status todoData={todoData.length} doneLength={doneLength()}/>
          </div>
          <div className="todoList__wrapper">
            <Search search={search}/>
            <Filter filterTodo={filterTodo} filter={filter}/>
          </div>
          <TodoList todos={todoData}
            removeItem={removeItem}
            onToggleImpontent={onToggleImpontent}
            onToggleDone={onToggleDone}
          />
          <Input createTodoItem={createTodoItem} />
        </div>
      </div>
    </div>
  );
}

export default App;