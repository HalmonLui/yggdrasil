import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import InfoBar from '../TopBar/InfoBar';
import UserTab from './UserTab';
import UserStats from './UserStats';
import UserEquips from './UserEquips';
import UserSkills from './UserSkills';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {showStats: true};
    this.showEquipment = this.showEquipment.bind(this);
    this.showSkills = this.showSkills.bind(this);
    this.showStats = this.showStats.bind(this);
  }
  showEquipment = () => {
    this.setState({showStats: false});
    this.setState({showSkills: false});
    this.setState({showEquipment: true});
  }
  showStats = () => {
    this.setState({showStats: true});
    this.setState({showSkills: false});
    this.setState({showEquipment: false});
  }
  showSkills = () => {
    this.setState({showStats: false});
    this.setState({showSkills: true});
    this.setState({showEquipment: false});
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
    return (
      <ImageBackground source={require('../../Images/User/nazarick.jpg')} style={styles.container}>
        <InfoBar navigation = {this.props.navigation}/>
        <View style={styles.userTabContainer}>
            <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showStats}>
              <Text style={styles.userTabButtonText}>STATS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showEquipment}>
              <Text style={styles.userTabButtonText}>EQUIPMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showSkills}>
              <Text style={styles.userTabButtonText}>SKILLS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showAlert}>
              <Text style={styles.userTabButtonText}>DECOR</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.showStats ? <UserStats/> : null}
          {this.state.showEquipment ? <UserEquips/> : null}
          {this.state.showSkills ? <UserSkills/> : null}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shopItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  userTabContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  userTabButtonContainer: {
    backgroundColor: 'steelblue',
    paddingVertical: 10,
    margin: 5,
    height: 40,
    width: 80,
    opacity: 0.90,
    borderRadius: 5,
  },
  userTabButtonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  },
});
