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
import Battle from '../components/Battle/Battle';

export default class BattleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return(
      <Battle navigation = {this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
