import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import InfoBar from '../TopBar/InfoBar';

export default class Friends extends Component {
  render(){
    return (
      <ImageBackground source={require('../../Images/Social/nazarick-banner.png')} style={styles.container}>
        <InfoBar navigation = {this.props.navigation}/>
        <ScrollView>
          <Text style={styles.noFriends}>You Cannot Have Friends Yet</Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noFriends: {
    fontSize: 150,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
