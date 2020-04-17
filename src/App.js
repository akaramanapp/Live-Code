import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import TodoList from './component/TodoList'
import TodoForm from './component/TodoForm'

function App() {
  const [TodoItems, setTodoItems] = useState([])

  const addItem = (item) => {
    let newItem = { id: Date.now(), text: item }
    setTodoItems([...TodoItems, newItem])
  }

  return (
    <div className="App">
      <Header />
      <TodoList items={TodoItems} />
      <TodoForm handleSubmit={addItem} />
    </div>
  );
}

export default App;
