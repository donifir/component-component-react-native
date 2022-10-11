import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Text>https://easyappicon.com/</Text>
      <Text>android/app/src/main/res/mipmap-*</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})