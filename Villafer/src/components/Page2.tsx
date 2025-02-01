import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const Page2 = () => {
  return (
      <View style={style.container}>
        <Text style = {style.Text}>ughhhhh</Text>
      </View>
    );
};

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00380f',
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
  });

export default Page2;