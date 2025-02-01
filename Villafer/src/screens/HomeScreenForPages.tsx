import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
} 

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const HomeScreenForPages: React.FC<Props> = ({navigation}) => {
    const [userId, setUserId] = useState('');

const checkValidity = () => {
    if (userId.length <= 8) {
        return false;
    } 
        return true;
    }
    
    return (
        <ImageBackground
                  source={require('../image/beauty.jpg')} // Ensure this path is correct
                  style={styles.background}
            >
                <View style={styles.overlay} />
        <View style = {styles.container}>
            <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
            <Text style = {styles.text}>Ambatubasssssssss</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Enter your user ID'
                    placeholderTextColor='rgb(255, 255, 255)'
                    value = {userId}
                    onChangeText = {setUserId}
                />
                {
                    checkValidity() === false
                    ? 
                    <TouchableOpacity style={styles.buttonDisabled} onPress={() => {}}>
                        <Text style={styles.buttonText}>Enter User ID</Text>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile', { userId })}>
                        <Text style={styles.buttonText}>Go to Profile</Text>
                    </TouchableOpacity>
                }
        </KeyboardAvoidingView>
        </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'rgb(50, 0, 111)',
        color: 'rgb(0, 0, 0)',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: windowWidth * 0.8,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
    },
    button: {
        backgroundColor: 'rgb(115, 0, 255)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: 'rgb(206, 167, 255)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        color: '#000000',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    background: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.15)', // Adjust the opacity to make the image darker
      },
});

export default HomeScreenForPages;