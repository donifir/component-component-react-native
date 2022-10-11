import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ListItem,
  Avatar,
  BackdropSubheader,
  Divider,
} from '@react-native-material/core';
import axios from 'axios';

export default function SuplierList({navigation}) {
  const [datas, setDatas] = useState([]);

  async function getSuplier() {
    try {
      const response = await axios.get('/api/suplier');
      console.log(response.data.data);
      setDatas(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSuplier();
  }, []);
  // <TouchableOpacity
  //             onPress={() => navigation.navigate('SuplierDetail')}></TouchableOpacity>

  return (
    <View style={styles.pages}>
      <ScrollView>
        {/* //////////////////////////// */}
        <View>
          {datas.map(data => (
            <View key={data.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SuplierDetail', {id: data.id})
                }>
                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                  <View>
                    <Image
                      source={{
                        uri: 'https://mui.com/static/images/avatar/1.jpg',
                      }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        margin: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginHorizontal: 5,
                      borderBottomWidth: 1,
                      flex: 1,
                      borderBottomColor: '#d1cdcd',
                    }}>
                    <Text style={{color: 'black', fontSize: 16}}>{data.nama_suplier}</Text>
                    <Text style={{fontSize: 14}}>{data.alamat_suplier}</Text>
                    <Text style={{fontSize: 14}}>{data.telp_suplier}</Text>

                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.wrapperButton}
          onPress={() => navigation.navigate('SuplierCreate')}>
          <Text style={styles.buttonCreate}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#34a1eb',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  buttonCreate: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    // borderRadius:30,
  },
});
