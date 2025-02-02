import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const Page1 = () => {
  return (
    <ImageBackground
      source={require('../image/beautifuldrop.jpg')} // Ensure this path is correct
      style={style.background}
    >
      <View style={style.overlay} />
      <View style = {style.container}>
        <Image
          source = {require('../image/Gayahh.jpg')} 
          style = {style.image}
        />
        <Text style = {style.Text}>Hallo!{'\n'}I am Jazric Forte{'\n'}I like BLACK MEN</Text>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Text: {
        fontSize: 30,
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

export default Page1;