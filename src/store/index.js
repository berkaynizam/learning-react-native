import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todosReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
    },
});