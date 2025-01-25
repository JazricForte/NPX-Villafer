import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
} 
const HomeScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>I am the TIGER</Text>
            <Button title = "Go to Profile" onPress = {() => navigation.navigate('Profile', { userId: 'jinipir'})} ></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#333333',
    },
})

export default HomeScreen;