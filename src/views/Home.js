import * as React from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import { useSelector } from "react-redux";

import {WelcomeScreen} from './Welcome';

import { GOOGLEMAPAPI } from '@env';

function HomeScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const hak = useSelector(state => state.counter.count);

    return (
        <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 50}}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputs}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputs}
                secureTextEntry={true}
            />
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>

            <Text style={styles.count}>Your global count is {hak} {GOOGLEMAPAPI}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    inputs: {
        width: '100%',
        borderStyle: 'solid',
        borderColor: '#cecece',
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#2cace6',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    },
    count: {
        marginTop: 20
    }
})

export default HomeScreen;
