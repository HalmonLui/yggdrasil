import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BattleSlot from './BattleSlot';
import DeathKnight from '../../Images/Battle/Death_Knight_Databook_01.png';
import Kirito from '../../Images/Battle/kirito.jpg';
import Firework from '../../Images/Battle/firework.png';
export default class Battle extends Component {
  constructor() {
    super()
    this.state = {
      deathKnight: {currentHP: 'hp'},
      userData: {nom: {
        skills: {
          skill1: {
            name: '',
            damage: '',
          },
          skill2: {
            name: '',
            damage: '',
          },
          skill3: {
            name: '',
            damage: '',
          },
          skill4: {
            name: '',
            damage: '',
          },
        }
      }},
      isDead: false,
    };
  }

  componentDidMount() {
    this.getEnemyData();
    this.getUserData();
  }

  getEnemyData() {
    fetch('http://yggdrasil.serveo.net/enemies/5bb99c4ca689d2c9c553e77f')
      .then(res => res.json())
      .then((resp) => {
        var deathKnight = resp;
        this.setState({ deathKnight: resp });
      })
    .catch(error=>console.log(error))
  }

  getUserData() {
    fetch('http://yggdrasil.serveo.net/users/5bbc068ea7360c1d840a92e6')
      .then(res => res.json())
      .then((resp) => {
        console.log(resp);
        var userData = resp;
        this.setState({ userData: resp });
        console.log(resp.nom.skills.skill2.name);
      })
    .catch(error=>console.log(error))
  }

  updateEnemyData(hp) {
    var newHP = {'currentHP':hp};
    fetch('http://yggdrasil.serveo.net/enemies/5bb99c4ca689d2c9c553e77f', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHP)
    })
      .then(res => res.json())
      .then((resp) => {
      })
  }
  deadCheck = (deathKnight) => {
    if (deathKnight.currentHP > 0){
      console.log(deathKnight.currentHP);
      this.updateEnemyData(deathKnight.currentHP);
      this.getEnemyData();
    }
    else{
      console.log(deathKnight.currentHP);
      deathKnight.currentHP = 0;
      this.updateEnemyData(deathKnight.maxHP);
      this.setState({isDead : true});
      this.timeoutHandle = setTimeout(() => {
        const { navigate } = this.props.navigation;
        navigate('Home');
      }, 2000);
    }
  }
  jab = () => {
    let deathKnight = this.state.deathKnight;
    let userSkills = this.state.userData.nom.skills.skill3;
    deathKnight.currentHP = deathKnight.currentHP - userSkills.damage;
    this.deadCheck(deathKnight);
  }
  opAnimePower = () => {
    let deathKnight = this.state.deathKnight;
    let userSkills = this.state.userData.nom.skills.skill2;
    deathKnight.currentHP = deathKnight.currentHP - userSkills.damage;
    console.log(deathKnight.currentHP);
    this.deadCheck(deathKnight);
  }

  render(){
    let deathKnight = this.state.deathKnight;
    let userSkills = this.state.userData.nom.skills;
    let isDead = this.state.isDead;
    return (
      <ImageBackground keyboardShouldPersistTaps='always' source={require('../../Images/Battle/anime_forest.jpg')} style={styles.container}>
        <View style={styles.enemySide}>
          <Text style={styles.enemyInfo}>HP: {deathKnight.currentHP}</Text>
          <TouchableOpacity onClick = {this.dodge} style = {styles.dodge}>
            <Text> Dodge </Text>
          </TouchableOpacity>
          <View style={styles.enemyBattleSlotContainer}>
            <BattleSlot name='Attack 1'/>
            <BattleSlot name='Attack 2'/>
            <BattleSlot name='Shield'/>
            <BattleSlot name='Defense Buff'/>
          </View>
          <Image source = {isDead ? Firework : DeathKnight} style = {styles.enemySprite} />
        </View>
        <View keyboardShouldPersistTaps='always' style={styles.userSide}>
          <Image source = {Kirito} style = {styles.userSprite} />
          <View keyboardShouldPersistTaps='always' style={styles.battleSlotContainer}>
            <BattleSlot name={JSON.stringify(userSkills.skill1.name)} damage={JSON.stringify(userSkills.skill1.damage)}/>
            <BattleSlot onPress = {this.opAnimePower} name={JSON.stringify(userSkills.skill2.name)} damage={JSON.stringify(userSkills.skill2.damage)}/>
            <BattleSlot onPress = {this.jab} name={JSON.stringify(userSkills.skill3.name)} damage={JSON.stringify(userSkills.skill3.damage)}/>
            <BattleSlot name={JSON.stringify(userSkills.skill4.name)} damage={JSON.stringify(userSkills.skill4.damage)}/>
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
    padding: 2,
    borderRadius: 2,
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
