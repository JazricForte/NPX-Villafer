import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { RouteProp } from "@react-navigation/native"

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
    route: ProfileScreenRouteProp;
} 
const ProfileScreen: React.FC<Props> = ({route}) => {
    const { userId } = route.params;
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>TIGERCIO</Text>
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
        fontSize: 100,
        textAlign: 'center',
        color: '#3333333',
    },
})

export default ProfileScreen;