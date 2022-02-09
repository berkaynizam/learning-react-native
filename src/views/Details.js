import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import TodoScreen from "./Todo";
import TestScreen from "./TestScreen";

function DetailsScreen({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Todo" component={TodoScreen} options={{ headerShown: false, title: 'Todo' }} />
        </Tab.Navigator>
    );
}

export default DetailsScreen;
