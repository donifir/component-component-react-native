import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Suplier"
        onPress={() => navigation.navigate('Suplier')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})