import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import FlexBox from './src/pages/FlexBox';
import PositionReactnative from './src/pages/PositionReactnative';
import StylingReactnativeComponent from './src/pages/StylingReactNativeComponent';
import AwalReact from './src/pages/AwalReact';
import ClassAwal from './src/pages/ClassAwal';
import PropsDinamis from './src/pages/PropsDinamis';
import StateDinamis from './src/pages/StateDinamis';
import ComunicationStateProps from './src/pages/ComunicationStateProps';

export default function App() {
  const Breaks = () => {
    return (
      <View
        style={{
          backgroundColor: '#6fcf97',
          height: 30,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Breaks</Text>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        {/* <FlexBox />
        <Breaks />
        <StylingReactnativeComponent />
        <Breaks />
        <PositionReactnative />
        <Breaks />
       <AwalReact/>
       <Breaks />
       <ClassAwal/> */}
       {/* <Breaks />
       <PropsDinamis/>
       <Breaks /> */}
       {/* <StateDinamis/> */}
       {/* <Breaks/> */}
       <ComunicationStateProps/>
      </ScrollView>
    </View>
  );
}

