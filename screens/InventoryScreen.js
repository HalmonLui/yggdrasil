import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import Inventory from '../components/Inventory/Inventory';

export default class InventoryScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render(){
    return (
      <Inventory navigation = {this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
