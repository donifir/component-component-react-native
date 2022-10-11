import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/Home';
import SuplierList from './src/pages/Suplier/SuplierList';
import SuplierCreate from './src/pages/Suplier/SuplierCreate';
import SuplierDetail from './src/pages/Suplier/SuplierDetail';
import SuplierEdit from './src/pages/Suplier/SuplierEdit';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Suplier" component={SuplierList} />
        <Stack.Screen name="SuplierCreate" component={SuplierCreate} />
        <Stack.Screen name="SuplierDetail" component={SuplierDetail} />
        <Stack.Screen name="SuplierEdit" component={SuplierEdit} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
