import { ADD_TODO,DELETE_TODO,EDIT_TODO,FINISHED_TODO } from "../constants/actions"

export const addTodo = (inputText)=>({type:ADD_TODO,payload:{todoText:inputText}})
export const todoFinished = (todo,isFinished)=>({type:FINISHED_TODO,payload:{todo,isFinished}})
export const deleteTodo = (todo)=>({type:DELETE_TODO,payload:{todo}})
export const editTodo = (todo,todoText)=>({type:EDIT_TODO,payload:{todo,todoText}})