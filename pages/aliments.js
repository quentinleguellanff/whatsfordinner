import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-web';

export default function Aliments() { 

const [listIngredient, setListIngredient] = useState([])

  useEffect(() =>{
    const req = async () => {
      const res = await fetch("https://swbackapi.herokuapp.com/api/v1/1/ingredients")
      const json = await res.json();
      setListIngredient(json.userFoodstuffs)

    }
    req()
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
            listIngredient.map((ingredient) => {
              return(
                <View key={ingredient.id} style={styles.ingredient}>
                  <Image
                    style={styles.images}
                    source={{uri: ingredient.image}}
                  />
                  <Text>{ingredient.name}</Text>
                </View>
              )
    
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
  },
  images:{
    resizeMode: "cover",
    width: '30%',
    height: '70%',
    borderRadius: 10,
  },
  ingredient:{
    width: '90%',
    height: '15%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  }
})