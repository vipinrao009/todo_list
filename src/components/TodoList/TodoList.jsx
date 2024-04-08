import Todo from "../Todo/todo"
import {useDispatch,useSelector} from "react-redux"
import { addTodo,deleteTodo,editTodo,todoFinished } from "../../actions/TodoAction";

function TodoList(){
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.todo)
  

  function onFinished(todo,isFinished){
    dispatch(todoFinished(todo,isFinished))
  }

  function onDelete(todo) {
    dispatch(deleteTodo(todo))
  }

  function onEdit(todo,todoText) {
    dispatch(editTodo(todo,todoText))
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