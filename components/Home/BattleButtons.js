import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class BattleButtons extends Component {
  showAlert = () => {
    Alert.alert(
      'Button',
      'I will eventually do something!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  battle() {
    const { navigate } = this.props.navigation;
    navigate('Battle');
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
        <TouchableOpacity
          onPress = {this.battle.bind(this)}
          style={styles.pveButtonContainer}>
            <Text style={styles.buttonText}>PvE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this.showAlert}
          style={styles.pvpButtonContainer}>
            <Text style={styles.buttonText}>PvP</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'space-around',
  },
  pvpButtonContainer: {
    backgroundColor: 'steelblue',
    height: 80,
    width: 140,
    opacity: 0.95,
    borderRadius: 5,
    justifyContent: 'center',
  },
  pveButtonContainer: {
    backgroundColor: 'green',
    height: 80,
    width: 140,
    opacity: 0.95,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  }
});
