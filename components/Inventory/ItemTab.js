import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class ItemSlot extends Component {
  showAlert = () => {
    Alert.alert(
      'Button',
      'I will change tabs',
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
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert}>
            <Text style={styles.buttonText}>EQUIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert}>
            <Text style={styles.buttonText}>USE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert}>
            <Text style={styles.buttonText}>ETC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert}>
            <Text style={styles.buttonText}>DECOR</Text>
          </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    backgroundColor: 'brown',
    paddingVertical: 10,
    margin: 5,
    height: 40,
    width: 80,
    opacity: 0.90,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  }
});
