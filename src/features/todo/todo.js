import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:"1", text:"hellow world"}]
} 

export const todo = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo :(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removetodo :(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !=action.payload)
        }
    }
})
export const {addtodo,removetodo}=todoSlice.action
export default todoSlice.reducer