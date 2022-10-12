import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tauch}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color:'#215FDD', fontSize:19}}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
});
