import React, {useEffect, useState} from 'react';
import Home from '../home';
import About from '../about';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../splash';

export default function Routes() {
  const [splash, setSplash] = useState(true);
  const Stack = createNativeStackNavigator();
  
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  if (splash === true) {
    // We haven't finished checking for the token yet
    // console.log(redirectAuth);
    return <Splash />;
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
