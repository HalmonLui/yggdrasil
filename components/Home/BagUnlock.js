import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class BagUnlock extends Component {
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
          style={styles.ButtonContainer}>
            <Text style={styles.buttonText}>Open Slot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.ButtonContainer}>
            <Text style={styles.buttonText}>Open Slot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.ButtonContainer}>
            <Text style={styles.buttonText}>Open Slot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.ButtonContainer}>
            <Text style={styles.buttonText}>Open Slot</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ButtonContainer: {
    backgroundColor: 'gray',
    height: 90,
    width: 90,
    opacity: 0.80,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    opacity: 0.80,
  }
});
