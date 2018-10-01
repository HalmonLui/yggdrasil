import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import Friends from '../components/Social/Friends';

export default class InventoryScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render(){
    return (
      <Friends navigation = {this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
