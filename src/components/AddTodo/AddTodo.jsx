import {useState } from "react"
import { addTodo } from "../../actions/TodoAction"
import {useDispatch} from 'react-redux'
function AddTodo(){
    
    const [inputText,setInputText] = useState('')
    const dispatch = useDispatch()
    
    return(
        
        <div>
            <input 
             type="text"
             value={inputText}
             placeholder="Add your todo..."
             onChange={e=>setInputText(e.target.value)}
            />
            <button onClick={()=>{
                dispatch(addTodo(inputText))
                setInputText('')
            }}>Add</button>
        </div>
        
    )
}

export default AddTodo