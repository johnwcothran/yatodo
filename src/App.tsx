import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/todo/todoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="is-size-3 has-text-light">
          Yatodo
        </h1>
        <p className="is-size-6 has-text-light">Yet another todo app</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;