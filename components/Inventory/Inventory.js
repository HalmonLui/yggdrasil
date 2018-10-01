import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import InfoBar from '../TopBar/InfoBar';
import EquipItem from './EquipItem';
import UseItem from './UseItem';
import EtcItem from './EtcItem';
import DecorItem from './DecorItem';

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {showEquipment: true};
    this.showEquipment = this.showEquipment.bind(this);
    this.showEtc = this.showEtc.bind(this);
    this.showUse = this.showUse.bind(this);
    this.showDecor = this.showDecor.bind(this);
  }
  showEquipment = () => {
    this.setState({showUse: false});
    this.setState({showEtc: false});
    this.setState({showEquipment: true});
    this.setState({showDecor: false});
  }
  showUse = () => {
    this.setState({showUse: true});
    this.setState({showEtc: false});
    this.setState({showEquipment: false});
    this.setState({showDecor: false});
  }
  showEtc = () => {
    this.setState({showUse: false});
    this.setState({showEtc: true});
    this.setState({showEquipment: false});
    this.setState({showDecor: false});
  }
  showDecor = () => {
    this.setState({showUse: false});
    this.setState({showEtc: false});
    this.setState({showEquipment: false});
    this.setState({showDecor: true});
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
      <ImageBackground source={require('../../Images/Inventory/stonewall.jpg')} style={styles.container}>
        <InfoBar navigation = {this.props.navigation}/>
        <View style={styles.userTabContainer}>
          <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showEquipment}>
            <Text style={styles.userTabButtonText}>EQUIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showUse}>
            <Text style={styles.userTabButtonText}>USE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showEtc}>
            <Text style={styles.userTabButtonText}>ETC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userTabButtonContainer} onPress = {this.showDecor}>
            <Text style={styles.userTabButtonText}>DECOR</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.showEquipment ? <EquipItem/> : null}
          {this.state.showUse ? <UseItem/> : null}
          {this.state.showEtc ? <EtcItem/> : null}
          {this.state.showDecor ? <DecorItem/> : null}
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
    backgroundColor: 'brown',
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
