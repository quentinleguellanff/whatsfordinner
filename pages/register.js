import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = () =>{
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username',  })
        };
        fetch('https://swbackapi.herokuapp.com/api/v1/register/')
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

  return (
    <SafeAreaView>
        <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Sign Up"} onPress={() => {}} />
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