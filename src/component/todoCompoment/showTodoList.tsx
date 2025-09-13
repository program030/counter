//Show Todo List Component
import { useTodoStore } from "../../store/todoStore";
import { RemoveButton } from "./removeButton";

export function ShowTodoList() {
    const { todoList } = useTodoStore();
    return (
        <>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        {todo}<RemoveButton index={index} />
                    </li>
                ))}
            </ul>
        </>
    );
}