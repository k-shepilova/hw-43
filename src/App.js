import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';
import { fetchTodos } from './store/ToDoSlice';
import './App.css';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className="todo-wrapper">
            <h1>ToDo List</h1>
            <ToDoList />
            <NewToDo />
        </div>
    );
}