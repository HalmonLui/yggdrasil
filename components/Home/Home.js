import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity, AsyncStorage, StatusBar,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import InfoBar from '../TopBar/InfoBar';
import TaskButtons from './TaskButtons';
import BattleButtons from './BattleButtons';
import BagUnlock from './BagUnlock';

export default class Home extends Component {

  logout() {
    const { navigate } = this.props.navigation;
    AsyncStorage.clear();
    navigate('Loading');
    console.log('logged out');
  }

  render(){
    return (
      <ImageBackground keyboardShouldPersistTaps='always' source={require('../../Images/Home/mystical-forest-fantasy-forest.jpg')} style={styles.container}>
        <StatusBar hidden />
        <InfoBar navigation = {this.props.navigation}/>
          <View keyboardShouldPersistTaps='always' style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.logout.bind(this)} style={styles.Logout}>
              <Text> Logout </Text>
            </TouchableOpacity>
            <TaskButtons style={styles.TaskButtons}/>
          </View>
          <View style={styles.battleButtonContainer}>
            <BattleButtons navigation = {this.props.navigation}/>
          </View>
          <View style={styles.bagUnlockButtonContainer}>
            <BagUnlock/>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 3,
  },
  battleButtonContainer: {
    flex: 1,
  },
  bagUnlockButtonContainer: {
    flex: 1,
  },
  Logout: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    width: 100,
    height: 100,
  },
});
