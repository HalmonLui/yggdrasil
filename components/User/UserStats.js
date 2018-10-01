import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class UserStats extends Component {
  showAlert = () => {
    Alert.alert(
      'Item',
      'Description: qwertyuiop',
      [
        {text: 'Wear', onPress: () => console.log('Wear Pressed')},
        {text: 'Salvage', onPress: () => console.log('Salvage Pressed')},
        {text: 'Sell', onPress: () => console.log('Sold Item')},
      ]
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.stats}>Level: 100</Text>
        <Text style={styles.stats}>HP: 100</Text>
        <Text style={styles.stats}>Intelligence: 100</Text>
        <Text style={styles.stats}>Strength: 100</Text>
        <Text style={styles.stats}>Dexterity: 100</Text>
        <Text style={styles.stats}>Luck: 100</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
    opacity: .80,
  },
  stats: {
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    margin: 10,
    height: 60,
    width: 60,
    opacity: 0.70,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  }
});
