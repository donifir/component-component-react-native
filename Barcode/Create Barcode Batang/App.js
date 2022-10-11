import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Barcode from '@fidme/react-native-barcode-builder'
// import Barcode from "@fidme/react-native-barcode-builder";

export default function App() {
  return (
    <View>
      <Text>App</Text>
      <Barcode value="Hello Worldadawsdadadawdwa" format="CODE128" />
    </View>
  )
}

const styles = StyleSheet.create({})