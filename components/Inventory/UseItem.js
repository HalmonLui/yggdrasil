import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class UseItem extends Component {
  showAlert = () => {
    Alert.alert(
      'Item',
      'Description: qwertyuiop',
      [
        {text: 'Wear', onPress: () => console.log('Wear Pressed')},
        {text: 'Salvage', onPress: () => console.log('Salvage Pressed')},
        {text: 'Sell', onPress: () => console.log('Sold Item')},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }

  render(){
    items = [
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
      {
        id: 1,
        text: 'Burn Heal'
      },
      {
        id: 1,
        text: 'Potion'
      },
    ];
    ItemMap = items.map(itemInfo => (
      <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert} key={itemInfo.id}>
        <Text style={styles.buttonText}>{itemInfo.text}</Text>
      </TouchableOpacity>
    ));
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
        {ItemMap}
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
