import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
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
                    backgroundColor: '#rgb(186, 107, 242)',
                    height: 100,
                    paddingBottom: 10,
                    
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: 'rgb(0, 0, 0)',
                tabBarLabelStyle: {
                    fontSize: 20,
                    top: 30
                },
            }}
            >
                <Tab.Screen name="Who I am"
                 component={Page1}
                 options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source = {require('../image/kyot.jpg')}
                            style={{ width: 50, height: 50, top: 20}}
                        />
                    ),
                }}
                />
                <Tab.Screen name="What I like"
                 component={Page2} 
                 options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source = {require('../image/ughhhh.jpg')}
                            style={{ width: 50, height: 50, top: 20}}
                        />
                    ),
                }}
                 />
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