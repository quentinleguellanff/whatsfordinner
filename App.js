import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './pages/navbar';

export default function App() {
    
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}
