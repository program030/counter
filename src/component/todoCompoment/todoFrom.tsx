// Todo List add Form
import { useState } from "react"
import { useTodoStore } from "../../store/todoStore"
export function TodoForm() {
    const addTodo = useTodoStore((state) => state.addTodo);
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo("");
        }
    };

    return (
        <>
            <form onSubmit ={handleSubmit}>
                <input type="text" placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type="submit" >Add Todo</button>
            </form>
        </>
    )
}