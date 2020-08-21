import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
    return (
        <NavigationContainer >
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Welcome" component={Welcome} />
            </Navigator>
        </NavigationContainer >
    );
}

export default AppRoutes;