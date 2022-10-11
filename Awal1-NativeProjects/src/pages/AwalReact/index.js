import {View, Text, Image, TextInput} from 'react-native';
import React, { Component } from 'react';

export default function AwalReact() {
  return (
    <View>
      <Data />
      <Images/>
      <SampleComponent/>
    </View>
  );
}
const Data = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'navy'}} />
    </View>
  );
};

const Images = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://placeimg.com/640/480/animals/grayscale'}}
        style={{width: 100, height: 100, marginVertical: 8}}
      />
      <Text>haha</Text>
    </View>
  );
};

const SampleComponent = () => {
  return (
    <View>
      <Text>App hahahahah</Text>
      <TextInput style={{borderWidth: 1, marginVertical: 8, borderRadius: 8}} />
    </View>
  );
};


