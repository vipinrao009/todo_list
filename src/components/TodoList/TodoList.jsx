import { useContext } from "react"
import Todo from "../Todo/todo"
import TodoContext from "../../context/TodoContext"
import todoDispatch from "../../context/TodoDispatchContext"

function TodoList(){

  const{list} = useContext(TodoContext)
  const {dispatch} = useContext(todoDispatch)

  function onFinished(todo,isFinished){
    dispatch({type:'onFinished',payload:{todo,isFinished}})
  }

  function onDelete(todo) {
    dispatch({type:'delete_todo',payload:{todo}})
  }

  function onEdit(todo,todoText) {
    dispatch({type:'edit_todo',payload:{todo,todoText}})
  }
   

    return (
        <div>
            {list.length>0 && list.map(todo => <Todo 
                                                  key={todo.id}
                                                  id={todo.id}
                                                  isFinished={todo.finished}
                                                  todoData={todo.todoData}

                                                  changeFinished = {(isFinished)=>onFinished(todo,isFinished)}

                                                  onDelete = {()=>onDelete(todo)}

                                                  onEdit = {(todoText)=>onEdit(todo,todoText)}
                                                />)}
        </div>
    )
}

export default TodoList