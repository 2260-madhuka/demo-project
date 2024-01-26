import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserListScreen, SplashScreen } from '../Screens';

const Stack = createNativeStackNavigator<RootNavigatorList>();

export type RootNavigatorList = {
    SplashScreen: undefined;
    UserListScreen: undefined;
}


const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
            <Stack.Screen
                name="UserListScreen"
                component={UserListScreen}
            />
        </Stack.Navigator>
    )
}

export default Navigator
