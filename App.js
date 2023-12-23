import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
  
  const isDarkMode= useColorScheme === 'dark'
  return (
      
      <View style={styles.container}>
        <Text style={styles.whiteText}>Hello World !</Text>
        <Text style={styles.blueText}>Nikhil Wanjare</Text>
        <Text style={isDarkMode?styles.blueText:styles.whiteText}>Here to </Text>
        <Text style={styles.whiteText}>React Native app</Text>
      </View>
    
  );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
      color:'red'
    },
    darkText:{
      color:'black'
    },
    blueText:{
      color:'blue'
    }

})

