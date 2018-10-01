import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class InfoBar extends Component {
  showGold = () => {
    const { navigate } = this.props.navigation;
    Alert.alert(
      'Gold',
      'The main in-game currency used to buy, sell, and trade! \n\nYou can buy more in the shop!',
      [
        {text: 'To Shop', onPress: () => navigate('ShopStack')},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  showMoney = () => {
    const { navigate } = this.props.navigation;
    Alert.alert(
      'Money',
      'The secondary currency used for speeding up unlocks, upgrading spells, buying items and more! \n\nYou can buy more in the shop!',
      [
        {text: 'To Shop', onPress: () => navigate('ShopStack')},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  showSettings = () => {
    Alert.alert(
      'Settings',
      'This will show you some settings!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <View style={styles.profilePicture}>
          </View>
          <View style={styles.expBar}>
            <Text>99998/99999</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.showGold} style={styles.gold}>
          <Text>G: 17489</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showMoney} style={styles.money}>
          <Text>$: 99999</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showSettings} style={styles.buttonContainer}>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  user: {
    flexDirection: 'row',
  },
  profilePicture: {
    height: 60,
    width: 60,
    backgroundColor: 'black',
    borderRadius: 100,
  },
  expBar: {
    height: 20,
    width: 100,
    backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  money: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  gold: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: 'gray',
    height: 30,
    width: 30,
    opacity: 0.95,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  }
});
