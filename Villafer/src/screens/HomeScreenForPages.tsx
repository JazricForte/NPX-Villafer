import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
} 

const windowWidth = Dimensions.get('window').width;

const HomeScreenForPages: React.FC<Props> = ({navigation}) => {
    const [userId, setUserId] = useState('');

<Text style = {styles.text}>ambatubaaaass</Text>

const checkValidity = () => {
    if (userId.length <= 8) {
        return false;
    } 
        return true;
    }

    return (
        <View style = {styles.container}>
            <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Enter your user ID'
                    value = {userId}
                    onChangeText = {setUserId}
                />
                {
                    checkValidity() === false
                        ?
                        <Button
                        title = "Enter User ID"
                        />
                        :
                        <Button
                        title = "Go to Profile"
                        onPress = {() => navigation.navigate('Profile', { userId: userId })}
                        />
                }
        </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: windowWidth * 0.8,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#333333',
    },
});

export default HomeScreenForPages;