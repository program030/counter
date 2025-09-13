//Delete Todo Button
import { useTodoStore } from "../../store/todoStore";

interface RemoveButtonProps {
    index: number;
}

export function RemoveButton({ index }: RemoveButtonProps) {
    const removeTodo = useTodoStore((state) => state.removeTodo);
    return (
        <button onClick={() => removeTodo(index)}>Delete</button>
    );
}