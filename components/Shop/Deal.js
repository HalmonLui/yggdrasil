import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class Deal extends Component {
  showAlert = () => {
    Alert.alert(
      'Item',
      'You bought an item!',
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
            <Text style={styles.buttonText}>BUY ITEM</Text>
            <Text>$19.99 Best deal ever just buy me already!</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginBottom: 5,
    height: 250,
    opacity: 0.95,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  }
});
