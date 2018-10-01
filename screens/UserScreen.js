import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import User from '../components/User/User';

export default class UserScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render(){
    return (
      <User navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
