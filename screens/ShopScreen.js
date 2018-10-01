import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import Shop from '../components/Shop/Shop';

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return(
      <Shop navigation = {this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
