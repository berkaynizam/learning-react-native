import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useDispatch} from "react-redux";

import { addTodo } from '../store/todoSlice';

function TodoForm(){

    const [data, setData] = React.useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(data.trim() != ''){
            dispatch(addTodo(data));
            setData('');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What needs to be done?"
                placeholderTextColor={'#000'}
                value={data}
                onChangeText={(text) => setData(text)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>
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
    buttonText: {
        fontSize: 20,
    },
});

export default TodoForm;