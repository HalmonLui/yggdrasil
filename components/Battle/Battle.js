import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import BattleSlot from './BattleSlot';
import DeathKnight from '../../Images/Battle/Death_Knight_Databook_01.png';
import Kirito from '../../Images/Battle/kirito.jpg';
export default class Battle extends Component {
  constructor() {
    super()
    this.state = {
      deathKnight: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://yggdrasil.serveo.net/enemies/5bb99c4ca689d2c9c553e77f')
      .then(res => res.json())
      .then((resp) => {
        console.log(resp);
        var deathKnight = resp;
        this.setState({ deathKnight: resp.currentHP });
        console.log(resp.currentHP);
      })
    .catch(error=>console.log(error))
  }

  opAnimePower = () => {
    console.log(this.state.deathKnight);
  }

  render(){
    let hp = this.state.deathKnight;
    return (
      <ImageBackground source={require('../../Images/Battle/anime_forest.jpg')} style={styles.container}>
        <View style={styles.enemySide}>
          <Text style={styles.enemyInfo}>HP: {hp}</Text>
          <TouchableOpacity onClick = {this.dodge} style = {styles.dodge}>
            <Text> Dodge </Text>
          </TouchableOpacity>
          <View style={styles.enemyBattleSlotContainer}>
            <BattleSlot name='Attack 1'/>
            <BattleSlot name='Attack 2'/>
            <BattleSlot name='Shield'/>
            <BattleSlot name='Defense Buff'/>
          </View>
          <Image source = {DeathKnight} style = {styles.enemySprite} />
        </View>
        <View style={styles.userSide}>
          <Image source = {Kirito} style = {styles.userSprite} />
          <View style={styles.battleSlotContainer}>
            <BattleSlot name='Double Slash'/>
            <BattleSlot onPress = {this.opAnimePower} name='OP Anime Power'/>
            <BattleSlot name='Jab'/>
            <BattleSlot name='Speed Buff'/>
          </View>
          <TouchableOpacity onPress = {this.opAnimePower} style = {styles.dodge}>
            <Text> Dodge </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  enemyInfo: {
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  enemySide: {
    flex: 1,
  },
  userSide: {
    flex: 1,
  },
  battleSlotContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  enemyBattleSlotContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  enemySprite: {
    width: '100%',
    height: '80%',
    opacity: .7,
  },
  userSprite: {
    width: '100%',
    height: '70%',
    opacity: .7,
  },
  dodge: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 5,
    opacity: 0.95,
  },
});
