import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class BattleSlot extends Component {
  showAlert = () => {
    Alert.alert(
      'Skill',
      'You used a skill!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <TouchableOpacity
          
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 5,
    marginBottom: 5,
    width: 100,
    height: 150,
    opacity: 0.95,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  }
});
