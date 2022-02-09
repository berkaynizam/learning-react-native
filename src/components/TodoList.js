import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../store/todoSlice";

function TodoList(){

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleToggle = (item) => {
        dispatch(toggleTodo(item));
    }

    return (
        <View style={styles.container}>
            {todos.map((todo,key) => (
                <TouchableOpacity key={todo.id} style={styles.todo} onPress={() => {
                    handleToggle({id: todo.id, completed: todo.completed})
                }}>
                    <View style={todo.completed ? styles.checked : styles.unchecked}></View>
                    <Text style={styles.todoText}>{todo.text}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    input: {
        height: 40,
        borderColor: '#cecece',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    button: {
        backgroundColor: '#cecece',
        padding: 10,
    },
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 20,
    },
    checked: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: 'limegreen',
    },
    unchecked: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#cecece',
    },
});
export default TodoList;