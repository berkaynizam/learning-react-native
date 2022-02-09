import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        text: 'Learn about actions',
        completed: false
    },
    {
        id: 2,
        text: 'Learn about reducers',
        completed: true
    },
    {
        id: 3,
        text: 'Learn about slices',
        completed: false
    }
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Math.random(),
                text: action.payload,
                completed: false
            });
        },
        removeTodo: (state, action) => {
            state.splice(action.payload, 1);
        },
        toggleTodo: (state, action) => {
            const index = state.findIndex(
                todo => todo.id === action.payload.id
            );
            state[index].completed = !action.payload.completed;
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;