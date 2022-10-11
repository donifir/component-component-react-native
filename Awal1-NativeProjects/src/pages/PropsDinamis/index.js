import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 60, height: 60, borderRadius: 60}}
      />
      <Text style={{maxWidth: 50, textAlignt: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <View style={{alignItems: 'center', marginTop:20}}>
        <Text style={{textAlignt: 'center', fontWeight:'bold', fontSize: 18}}>materi Prop dinamis</Text>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <ScrollView horizontal>
          <Story
            judul="hahahadawdadawd"
            gambar="https://placeimg.com/200/200/animals"
          />
          <Story judul="hahah" gambar="https://placeimg.com/200/200/arch" />
          <Story judul="hahah" gambar="https://placeimg.com/200/200/nature" />
          <Story judul="hahah" gambar="https://placeimg.com/200/200/people" />
          <Story judul="hahah" gambar="https://placeimg.com/200/200/tech" />
          <Story judul="hahah" gambar="https://placeimg.com/200/200/tech" />
          <Story judul="hahah" gambar="https://placeimg.com/200/200/tech" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
