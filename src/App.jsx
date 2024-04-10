import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import {useDispatch} from 'react-redux'
import {bindActionCreators} from "redux"
import { addTodo,deleteTodo,editTodo,todoFinished } from "./actions/TodoAction"

function App() {
  const dispatch = useDispatch()
  const action = bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch)
  return (
    
    <>
      <AddTodo addTodo={action.addTodo}/>
      <TodoList deleteTodo={action.deleteTodo} editTodo={action.editTodo} todoFinished={todoFinished}/>
    </> 
  )
}

export default App