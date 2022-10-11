import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: 'green', width: 50, height: 50}}></View>
          <View style={{backgroundColor: 'purple', flex: 1, height: 50}}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <Text>FlexBox</Text>
          <Text>FlexBox</Text>
          <Text>FlexBox</Text>
          <Text>FlexBox</Text>
          <Text>FlexBox</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 20 , alignItems:'center'}}>
          <Image
            source={{
              uri: 'https://www.99.co/blog/indonesia/wp-content/uploads/2022/07/profil-wa-unik.jpg',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
          <View style={{marginLeft:14,}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}> Doni Fiemansyah</Text>
            <Text> Subcriber 100</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
