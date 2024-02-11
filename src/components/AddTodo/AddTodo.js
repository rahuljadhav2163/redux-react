// AddTodo.js
import React, { useState } from 'react';
import "./AddTodo.css"; // Check the path to this file
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, removetodo, edittodo } from '../../features/todo/todo';

function AddTodo() {
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(edittodo({ id: editingId, text: input }));
      setEditingId(null);
    } else {
      dispatch(addtodo(input));
    }
    setInput('');
  };

  const todos = useSelector(state => state.todos);

  const editTodoHandler = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setInput(todoToEdit.text);
    setEditingId(id);
  };

  return (
    <div>
      <p className='heading'>Redux Toolkit</p>
      <form
        onSubmit={addToDoHandler}
        className='form-container'>
        <input
          className='inputfield'
          type='text'
          placeholder='Enter ToDo '
          value={input}
          onChange={(e) => { setInput(e.target.value) }}
        />
        <button type='submit' className='btn'>{editingId ? 'Edit Todo' : 'Add Todo'}</button>
      </form>
      <p className='heading'>ToDo's</p>
      <div className='todo-container'>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <p className='text'>{todo.text}</p>
              <button className='remove-btn' onClick={() => { dispatch(removetodo(todo.id)) }} type='button'>🗑️</button>
              <button className='edit-btn' onClick={() => { editTodoHandler(todo.id) }} type='button'>🖋️</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default AddTodo;
