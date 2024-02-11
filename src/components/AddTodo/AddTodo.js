import React, { useState } from 'react';
import "./AddTodo.css";
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
      <form
        onSubmit={addToDoHandler}
        className='form-container'>
        <input
          className='inputfield'
          type='text'
          placeholder='enter something '
          value={input}
          onChange={(e) => { setInput(e.target.value) }}
        />
        <button type='submit' className='btn'>{editingId ? 'Edit Todo' : 'Add Todo'}</button>
      </form>
      <div>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <h1>{todo.text}</h1>
              <button onClick={() => { dispatch(removetodo(todo.id)) }} type='button'>Remove</button>
              <button onClick={() => { editTodoHandler(todo.id) }} type='button'>Edit</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default AddTodo;
