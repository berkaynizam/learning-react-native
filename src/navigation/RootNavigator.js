import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../views/Home';
import DetailsScreen from '../views/Details';
import WelcomeScreen from '../views/Welcome';
import MoviesScreen from '../views/Movies';

import {createDrawerNavigator} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();


function RootNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}} />
                <Drawer.Screen name="Movies" component={MoviesScreen} options={{ title: 'Movies' }} />
                <Drawer.Screen name="Details" component={DetailsScreen} options={{ title: 'Counter & Todo' }} />
                <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Map', headerShown: false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;