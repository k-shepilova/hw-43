import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './ToDoSlice';

const store = configureStore({
    reducer: {
        todos: ToDoReducer,
    },
});

export default store;