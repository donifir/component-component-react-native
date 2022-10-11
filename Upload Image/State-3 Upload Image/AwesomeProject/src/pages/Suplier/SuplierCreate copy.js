import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import aspals from '../../assets/image/road_asphalt_marking_130996_3840x2400.jpg';
import React, {useEffect, useState} from 'react';
import {TextInput} from '@react-native-material/core';
import {Stack, Button} from '@react-native-material/core';
import axios from 'axios';
// axios.defaults.headers.post['Conten-Type'] = 'multipart/form-data';
// axios.defaults.baseURL = 'http://192.168.91.14:8000';

export default function SuplierCreate() {
  const [namaSuplier, setNamaSuplier] = useState('');
  const [alamatSuplier, setAlamatSuplier] = useState('');
  const [telpSuplier, setTelpSuplier] = useState('');

  const submit = async () => {
    const formData = new FormData();
    formData.append('nama_suplier', namaSuplier);
    formData.append('alamat_suplier', alamatSuplier);
    formData.append('telp_suplier', alamatSuplier);

    fetch(`http://192.168.91.14:8000/api/suplier/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(json => {
        if (json.success === true) {
          console.log('json1', json);
          Alert.alert('Success', 'Data Submited');
          setAlamatSuplier('');
          setNamaSuplier('');
          setTelpSuplier('');
        } else {
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('haha');
  }, []);

  return (
    <View>
      {/* <Text>SuplierCreate</Text> */}

      <ScrollView>
        <View style={styles.card}>
          <Image source={aspals} style={styles.image}></Image>
          <Text style={styles.text}>SuplierCreate</Text>
        </View>
        <View>
          <TextInput
            variant="outlined"
            label="Alamat Name"
            style={styles.textInput}
            value={namaSuplier}
            onChangeText={value => setNamaSuplier(value)}
          />
          <TextInput
            variant="outlined"
            label="Suplier Address"
            style={styles.textInput}
            value={alamatSuplier}
            onChangeText={value => setAlamatSuplier(value)}
          />
          <TextInput
            variant="outlined"
            label="Suplier Phone Number"
            style={styles.textInput}
            value={telpSuplier}
            onChangeText={value => setTelpSuplier(value)}
          />
          <Stack fill center>
            <Button
              title="Save"
              style={{backgroundColor: '#34a1eb'}}
              onPress={submit}
            />
          </Stack>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    height: 93,
    backgroundColor: 'gold',
    backgroundColor: '#F2F2F2',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 93,
    borderBottomLeftRadius: 19,
    borderTopLeftRadius: 19,
  },
  text: {
    paddingLeft: 10,
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16,
  },
  textInput: {
    marginVertical: 10,
    marginHorizontal: 16,
  },
});
