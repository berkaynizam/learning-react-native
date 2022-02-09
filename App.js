import * as React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from "./src/navigation/RootNavigator";

import { Provider } from 'react-redux';
import { store } from './src/store';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

function App() {
    return (
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
}

export default App;