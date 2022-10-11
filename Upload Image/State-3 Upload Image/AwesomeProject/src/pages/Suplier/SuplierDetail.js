import {Alert, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import aspal from '../../assets/image/road_asphalt_marking_130996_3840x2400.jpg';
import axios from 'axios';
import { Button } from '@react-native-material/core';

export default function SuplierDetail({route, navigation}) {
  const [data, setData] = useState([]);
  const {id} = route.params;
  async function getSuplier() {
    try {
      const response = await axios.get(`/api/suplier/${id}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deletetSuplier() {
    try {
      const response = await axios.delete(`/api/suplier/${id}`);
      Alert.alert('Success', 'Data Deleted');
      navigation.push('Suplier')
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSuplier();
  }, []);

  return (
    <View>
      <View style={styles.card}>
        <Image source={aspal} style={styles.image} />
        <View style={styles.card2}>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={{flex: 4}}>Nama Suplier</Text>
            <Text style={{flex: 1}}>:</Text>
            <Text style={{flex: 7}}>{data.nama_suplier}</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={{flex: 4}}>Alamat Suplier</Text>
            <Text style={{flex: 1}}>:</Text>
            <Text style={{flex: 7}}>{data.alamat_suplier}</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={{flex: 4}}>Telp Suplier</Text>
            <Text style={{flex: 1}}>:</Text>
            <Text style={{flex: 7}}>{data.telp_suplier}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginTop:10}}>
            <Button title='edit' onPress={()=>navigation.push('SuplierEdit',{id:id})}></Button>
            <Button title='delete' color="red" onPress={deletetSuplier}></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    // flexDirection: 'row',
    position: 'relative',
  },
  image: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 200,
  },
  card2: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 180,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 13,
  },
});
