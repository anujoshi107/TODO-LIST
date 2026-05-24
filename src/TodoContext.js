import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
    {
    id: 1,
    todo: "todos message",
    completed: false
    }
    ],
    addtodo : (todo) => {},
    updatetodo : (id,todo) => {},
    deletetodo : (id) => {},
    togglecomplete : (id) => {}
});
export const usetodo = () => {
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider