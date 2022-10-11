import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'

export class ClassAwal extends Component {
  render() {
    return (
      <View>
        <Image2/>
      </View>
    )
  }
}

export default ClassAwal


  
  class Image2 extends Component {
    render() {
      return (
        <View>
          <Image
            source={{uri: 'https://placeimg.com/640/480/animals/grayscale'}}
            style={{width: 100, height: 100, marginVertical: 8, borderRadius: 50}}
          />
          <Text style={{color: 'red', fontSize: 22}}>
            Ini Adalah Text Dari Gambar 2
          </Text>
        </View>
      );
    }
  }