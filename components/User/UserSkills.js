import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class UserSkills extends Component {
  showAlert = () => {
    Alert.alert(
      'Skill',
      'Sugoi Desune',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SKILL</Text>
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
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    backgroundColor: 'brown',
    paddingVertical: 10,
    marginBottom: 5,
    height: 120,
    width: 120,
    opacity: 0.95,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  }
});
