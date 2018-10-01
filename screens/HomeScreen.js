import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';
import Home from '../components/Home/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Home navigation={this.props.navigation}/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
