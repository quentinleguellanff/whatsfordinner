import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';

export default function Login({ navigation }) {

  return (
    <SafeAreaView>
       <View>
        <Text>lol</Text>
        <Button title={"changer de page"} onPress={() => navigation.navigate("Register")} />
        </View>
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