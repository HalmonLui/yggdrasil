import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class TaskButtons extends Component {
  showAlert = () => {
    Alert.alert(
      'Button',
      'I will eventually do something!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>RANK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>NEWS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>QUEST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>DUNGEON</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    opacity: 0.95,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  }
});
