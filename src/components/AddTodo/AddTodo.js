import React, { useState } from 'react';
import "./AddTodo.css";
import { useDispatch, useSelector } from 'react-redux';
import { addtodo } from '../../features/todo/todo';
import { removetodo } from '../../features/todo/todo';
import { UseSelector } from 'react-redux';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addtodo(input));
    setInput('')
  };

  const todos = useSelector(state => state.todos)



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
        <button type='submit' className='btn'>Add ToDo</button>
      </form>
      <div>
        {
          todos.map((todo) => (
            <>
              <h1 key={todo.id}>{todo.text}</h1>
              <button onClick={() => { dispatch(removetodo(todo.id)) }} type='button'>X</button>
            </>

          ))
        }
      </div>
    </div>
  );
}

export default AddTodo;
