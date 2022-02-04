import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeScreen from "./Home";
import TestScreen from "./TestScreen";

function DetailsScreen({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default DetailsScreen;
