import * as React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from '../store/counterSlice';

function HomeScreen({navigation}) {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handeIncrement = () => {
        dispatch(increment());
    };
    const handeDecrement = () => {
        dispatch(decrement());
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.counter}>Your count: {count}</Text>

            <View style={styles.buttons}>

                <TouchableOpacity onPress={handeDecrement}>
                    <Text style={styles.button}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handeIncrement}>
                    <Text style={styles.button}>+</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    counter: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
    },
    button: {
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#ccc',
        marginLeft: 10,
    }
})

export default HomeScreen;
