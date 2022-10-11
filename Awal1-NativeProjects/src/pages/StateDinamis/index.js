import {Button, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

const Counter=()=>{
    const [number, setNumber]=useState(0);
    
    return(
        <View>
            <Text>{number}</Text>
            <Button title='tambah' onPress={()=>setNumber(number+1)}></Button>
        </View>
    )
}

export default function StateDinamis() {
  return (
    <View style={styles.wraper}>
      <Text style={styles.text}>
        Materi State dinamis
      </Text>
      <Counter/>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
    wraper:{
        padding:20
    },
    text:{
        textAlign:'center'
    }

});
