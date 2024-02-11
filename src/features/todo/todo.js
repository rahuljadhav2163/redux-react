import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "hello world" }]
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
    }
  }
});

export const { addtodo, removetodo } = todo.actions;
export default todo.reducer;
