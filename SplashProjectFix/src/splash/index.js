import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

export default function Splash({navigation}) {
  // const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true, // Add this line
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView
          style={{width: 250, height: 70, backgroundColor: 'gold'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            Fading in
          </Text>
        </FadeInView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tauch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// splash manual
