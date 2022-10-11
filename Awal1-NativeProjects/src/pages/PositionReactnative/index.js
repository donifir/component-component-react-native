import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Keranjang from '../../assets/download.jpeg';

export default function PositionReactnative() {
  return (
    <View style={styles.wraper}>
      <View style={styles.cardWraper}>
        <Image source={Keranjang} style={styles.iconCard}></Image>
        <Text style={styles.notif}>10</Text>
      </View>
      <View>
        <Text style={styles.text}>Masukan Keranjang Belanja</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wraper: {padding: 20, alignItems: 'center'},
  cardWraper: {
    borderWidth: 1,
    borderColor: 'black',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  },
  iconCard: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'gold',
    padding: 4,
    borderRadius: 25,
    width:24,
    height:24,
    position:'absolute',
    top:0,
    right:0
  },
});
