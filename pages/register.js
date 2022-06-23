import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register( { navigation }) {
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [userId, setUserId] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    const register = async () => {
      const response = await fetch(
        'https://swbackapi.herokuapp.com/api/v1/register/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            pseudo: pseudo
          })
        }
      );
      if(await response.status == 201){
        const json = await response.json();
        setUserId(json?.newUser?.id)
        setAuthenticated(true)
        AsyncStorage.setItem('userId',JSON.stringify(json?.newUser?.id))
        navigation.navigate("Home")
      }
    }

  return (
    <SafeAreaView>
       <TextInput
        style={styles.input}
        value={email}
        placeholder={"votre email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
        <TextInput
        style={styles.input}
        value={pseudo}
        placeholder={"Pseudo"}
        onChangeText={(text) => setPseudo(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={password}
        placeholder={"Mot de passe"}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={passwordConfirm}
        placeholder={"Confirmer votre mot de passe"}
        onChangeText={(text) => setpasswordConfirm(text)}
      />
      <Button title={"Créer un compte"} onPress={() => register()} />
      <Button title={"changer de page"} onPress={() => navigation.navigate("Connexion")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
  });