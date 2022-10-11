import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import aspals from '../../assets/road_asphalt_marking_130996_3840x2400.jpg';


export default function StylingReactnativeComponent() {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'pink',
          borderWidth: 2,
          borderColor: 'purple',
          marginVertical: 20,
          marginHorizontal: 20,
        }}></View>

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
