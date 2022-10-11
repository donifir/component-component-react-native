import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import aspals from '../../assets/image/road_asphalt_marking_130996_3840x2400.jpg';
import React, {useEffect, useState} from 'react';
import {TextInput} from '@react-native-material/core';
import {Stack, Button} from '@react-native-material/core';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.91.14:8000';
const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};

export default function SuplierEdit({route, navigation}) {
  const [namaSuplier, setNamaSuplier] = useState('');
  const [alamatSuplier, setAlamatSuplier] = useState('');
  const [telpSuplier, setTelpSuplier] = useState('');
  const {id} = route.params;

  const submit = async () => {
    const formData = new FormData();
    formData.append('nama_suplier', namaSuplier);
    formData.append('alamat_suplier', alamatSuplier);
    formData.append('telp_suplier', alamatSuplier);

    axios
      .post(`/api/suplier/${id}/update`, formData, header)
      .then(function (response) {
        console.log(response);
        Alert.alert('Success', 'Data Submited');
        setAlamatSuplier('');
        setNamaSuplier('');
        setTelpSuplier('');
        navigation.push('Suplier');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function getSuplier() {
    try {
      const response = await axios.get(`/api/suplier/${id}`);
      console.log(response.data.data);
      setNamaSuplier(response.data.data.nama_suplier);
      setAlamatSuplier(response.data.data.alamat_suplier);
      setTelpSuplier(response.data.data.telp_suplier);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSuplier();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.card}>
          <Image source={aspals} style={styles.image}></Image>
          <Text style={styles.text}>SuplierCreate</Text>
        </View>
        <View>
          <TextInput
            variant="outlined"
            label="Suplier Name"
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
