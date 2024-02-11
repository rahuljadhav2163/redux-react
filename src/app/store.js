import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../features/todo/todo.js"
 const store = configureStore({
    reducer:todoReducer
});

export default store