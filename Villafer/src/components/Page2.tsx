import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const Page2 = () => {
  return (
    <ImageBackground
          source={require('../image/lovely.png')} // Ensure this path is correct
          style={style.background}
    >
      <View style={style.overlay} />
      <View style={style.container}>
        <Text style = {style.Text}>I love to play games{'\n'}I love music{'\n'}I love technology{'\n'}And I love Jennifer Anne Zabala Villagomez</Text>
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
        bottom: 150,
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

export default Page2;