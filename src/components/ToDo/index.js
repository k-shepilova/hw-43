import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../store/ToDoSlice';

export default function ToDo({ todo }) {
    const dispatch = useDispatch();
    const { id, title, completed } = todo;

    return (
        <label
            style={{
                textDecoration: completed ? 'line-through' : 'none',
            }}
            className="todo-item"
        >
            <input
                onChange={() => dispatch(toggleTodo(id))}
                type="checkbox"
                checked={completed}
            />
            {title}
        </label>
    );
}
