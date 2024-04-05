import { useContext } from "react"
import Todo from "../Todo/todo"
import TodoContext from "../../context/TodoContext"

function TodoList(){

  function onFinished(todo,isFinished){
    const updatedList = list.map((t)=>{
        if(t.id == todo.id){
            todo.finished = isFinished
        }
        return t;
    })
    setList(updatedList);
  }

  function onDelete(todo) {
    const updatedList = list.filter(t=>t.id != todo.id)
    setList(updatedList)
  }

  function onEdit(todo,todoText) {
    const updatedList = list.map((t)=>{
        if(t.id == todo.id){
            todo.todoData = todoText
        }
        return t;
    })
    setList(updatedList)
  }
   
  const{list,setList} = useContext(TodoContext)
  
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