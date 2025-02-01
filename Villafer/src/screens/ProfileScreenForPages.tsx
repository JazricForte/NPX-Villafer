import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
    route: ProfileScreenRouteProp;
};

const Tab = createBottomTabNavigator();

const ProfileScreenForPages: React.FC<Props> = ({ route }) => {
    const { userId } = route.params;

    return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#002507',
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#888888',
            }}
            >
                <Tab.Screen name="Page1" component={Page1} />
                <Tab.Screen name="Page2" component={Page2} />
            </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: '#333333',
    },
});

export default ProfileScreenForPages;