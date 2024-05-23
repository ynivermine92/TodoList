// Search.jsx
import React, { useState } from 'react';

function Search({ search }) {

  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    search(text);
  };

  return (
    <input 
      type="text" 
      placeholder="Search" 
      value={searchText} //то что записал ипут  передаю состояние searchText
      onChange={handleChange} // onChange используется для отслеживания изменений значения элемента.
    />
  );
}

export default Search;
