import React, {useState, useEffect} from 'react';
import { ActivityIndicator,View,StyleSheet,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('userId').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'Home'
        ),
      );
    }, 1000);
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/sticker-nike.jpg')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});