import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/ToDoSlice';

export default function NewToDo() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            dispatch(addTodo({
                id: Date.now(),
                title: value,
                completed: false,
            }));
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}
