import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const Page1 = () => {
  return (
    <View style = {style.container}>
      <Image
        source = {require('../image/please.jpg')} 
        style = {style.image}
      />
      <Text style = {style.Text}>Hallo!{'\n'}I am Jazric Forte{'\n'}I like BLACK MEN</Text>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(112, 176, 249)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
    },
    context: {
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
        width: windowWidth * 0.8,
        height: windowHeight * 0.5,
        marginTop: 20,
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });

export default Page1;