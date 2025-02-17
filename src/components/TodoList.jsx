
import React, { useState } from 'react';
import '../styles/todo.css';

export default function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, done: false }]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ backgroundColor: '#404040' }}>
      <h1>To Do List</h1>
      <div className="inputContainer">
        <input
          id="inputField"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>+</button>
        <div className="to-dos">
          {todos.map((todo, index) => (
            <p
              key={index}
              onClick={() => toggleTodo(index)}
              onDoubleClick={() => removeTodo(index)}
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
