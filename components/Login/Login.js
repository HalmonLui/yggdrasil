import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, ImageBackground, StatusBar } from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component {
  render(){
    return (
      <ImageBackground source={require('../../Images/Login/yggdrasil_by_raedrob-d8hth4f.jpg')} style={styles.container}>
        <StatusBar hidden />
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.logoContainer}>
            {/*<Image
              style={styles.logo}
              source={require('../../Images/Login/Seasons-of-the-World-Tree-Logo-800x800.png')}
              />*/}
          <Text style={styles.title}> Yggdrasil </Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm navigation={this.props.navigation} />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});
