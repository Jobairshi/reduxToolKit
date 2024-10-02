import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: '1', text: 'hellow world' }]
}



export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload  // here payload is an object you can 
                // access anyting using dot operator
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{ // state contain current state and 
            //action contain the passed data
            state.todos  = state.todos.filter((elem)=>elem.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo}  = todoSlice.actions; 
export default todoSlice.reducer;