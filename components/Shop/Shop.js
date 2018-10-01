import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import ShopItem from './ShopItem';
import Deal from './Deal';
import InfoBar from '../TopBar/InfoBar';

export default class Shop extends Component {
  render(){
    return (
      <ImageBackground source={require('../../Images/Shop/the_armor_shop_by_sweetmoon-d622tbg.jpg')} style={styles.container}>
        <InfoBar navigation = {this.props.navigation}/>
        <ScrollView>
          <View style={styles.shopItemContainer}>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
          </View>
          <View style={styles.shopItemContainer}>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
          </View>
          <View style={styles.shopItemContainer}>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
          </View>
          <Deal/>
          <Deal/>
          <Deal/>
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
    justifyContent: 'space-around'
  },
});
