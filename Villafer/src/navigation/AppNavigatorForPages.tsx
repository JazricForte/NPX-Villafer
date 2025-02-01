import React from "react";
import { NavigationContainer, } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators, StackCardInterpolationProps } from '@react-navigation/stack';
import HomeScreenForPages from "../screens/HomeScreenForPages";
import ProfileScreenForPages from "../screens/ProfileScreenForPages";

export type RootStackParamList = {
    Home: undefined;
    Profile: {userId?: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const forFade = ({ current }: StackCardInterpolationProps) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

const AppNavigatorForPages: React.FC = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator 
        initialRouteName = "Home"
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Example: Horizontal slide transition
        }}>
        <Stack.Screen
        name = "Home"
        component = {HomeScreenForPages}
        options = {{title: 'Home'}}
        />
        <Stack.Screen
        name = "Profile"
        component = {ProfileScreenForPages}
        options = {{title: 'Profile'}}
        />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigatorForPages;