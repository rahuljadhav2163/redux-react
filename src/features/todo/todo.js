// todo.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Hello world" }]
};

export const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(newTodo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    edittodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.todos.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
      }
    }
  }
});

export const { addtodo, removetodo, edittodo } = todo.actions;
export default todo.reducer;
