import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import CardComponent from '../../components/Card';
import ProductComponent from '../../components/Product';

export default function ComunicationStateProps() {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.wraper}>
      <Text style={styles.text}>ComunicationStateProps</Text>
      <CardComponent quantity={totalProduct}/>
      <ProductComponent onButtonPress={()=>setTotalProduct(totalProduct+1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wraper: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});
