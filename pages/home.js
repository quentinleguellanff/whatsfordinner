import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Recettes from './recettes';
import Scan from './scan';
import Aliments from './aliments';

const Tab = createBottomTabNavigator();

export default function Home() {
    
  return (
    <Tab.Navigator
        initialRouteName='recettes'
        screenOptions={ ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              let result
  
              if (route.name === 'recettes') {
                iconName = focused ? 'book-open' : 'book'
                result = <Feather name={iconName} size={size} color={color} />
              }
              else if (route.name === 'scan') {
                iconName = focused ? 'barcode-scan' : 'barcode-scan'
                result = <MaterialCommunityIcons name={iconName} size={size} color={color} />
              }
              else{
                iconName = focused ? 'silverware-fork-knife' : 'silverware-fork-knife'
                result = <MaterialCommunityIcons name={iconName} size={size} color={color} />
              }
  
              // You can return any component that you like here!
              return result
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
    >
      <Tab.Screen name="recettes" component={Recettes} />
      <Tab.Screen name="scan" component={Scan} />
      <Tab.Screen name="aliments" component={Aliments} />
    </Tab.Navigator>
  );
}