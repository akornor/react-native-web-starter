import React from "react";
import {Text, View, TextInput, StyleSheet, Button, ActivityIndicator, Platform, Vibration, Alert} from "react-native";

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})