import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import Navbar from './pages/navbar';
import Login from './pages/Login';
=======
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import SplashScreen from './pages/SplashScreen';
>>>>>>> ece57be49ed8168a5feb4b36e0167fde90b611eb

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Connexion">
      <Stack.Screen
        name="Connexion"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Créer un compte', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
 
const App = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      {/* <Navbar/> */}
      <Login/>
=======
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
>>>>>>> ece57be49ed8168a5feb4b36e0167fde90b611eb
    </NavigationContainer>
  );
};
 
export default App;
