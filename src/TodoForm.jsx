import { useState } from "react";
import { usetodo } from "./todocontext";
function TodoForm(){
    const [todo,settodo] = useState("")
    const {addtodo} = usetodo()
    const add = (e) => {
        e.preventDefault()
        if(!todo)return
        addtodo({todo,completed : false})
        settodo("")
    }
    return(
        <form onSubmit={add}>
            <input
                type = "text"
                value={todo}
                placeholder="write todo.."
                onChange={(e) => settodo(e.target.value)}
            />
            <button type="submit">
                add
            </button>
        </form>
    )
}
export default TodoForm