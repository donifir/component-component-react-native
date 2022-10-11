import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import aspals from '../../assets/road_asphalt_marking_130996_3840x2400.jpg';

export default function ProductComponent(props) {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8,
      }}>
      <Image
        source={aspals}
        style={{width: 188, height: 107, borderRadius: 8}}></Image>
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
        Aspal Wallpaper
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 12,
          color: '#f2994a',
        }}>
        Price : 123213
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '300',
          marginTop: 12,
        }}>
        Alamat Jakarta barat
      </Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
