import { useSelector } from 'react-redux';
import ToDo from '../ToDo';

export default function ToDoList() {
    const todos = useSelector((state) => state.todos.todos);
    const status = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <ToDo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}