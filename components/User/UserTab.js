import React, { Component } from 'react';
import { Header } from 'react-navigation';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class UserTab extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingStats: true};
  }
  showEquipment = () => {
    this.setState(previousState => {
      return { isShowingStats: !previousState.isShowingStats };
    });
  }

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
    let displayStats = this.state.isShowingStats ? this.props.stats : ' ';
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert}>
            <Text style={styles.buttonText}>STATS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showEquipment}>
            <Text style={styles.buttonText}>EQUIPMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress = {this.showAlert}>
            <Text style={styles.buttonText}>SKILLS</Text>
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
    backgroundColor: 'steelblue',
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
