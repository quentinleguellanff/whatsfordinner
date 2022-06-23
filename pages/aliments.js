import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration, RefreshControl } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-web';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Aliments() { 

const [listIngredient, setListIngredient] = useState([])
const [refreshing, setRefreshing] = useState(false);

  useEffect(() =>{
    const req = async () => {
      const userId = await AsyncStorage.getItem('userId')
      console.log(userId)
      const res = await fetch("https://swbackapi.herokuapp.com/api/v1/1/ingredients")
      const json = await res.json();
      setListIngredient(json.userFoodstuffs)

    }
    req()
  }, [refreshing])


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if(listIngredient != []){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          >
          {
              listIngredient.map((ingredient) => {
                return(
                  <View key={ingredient.id} style={styles.ingredient}>
                    <Image
                      style={styles.images}
                      source={{uri: ingredient.image}}
                    />
                    <Text style={styles.ingredientName}>{ingredient.name}</Text>
                  </View>
                )
            })
          }
        </ScrollView>
      </SafeAreaView>
    );
  }else{
    return ( 
    <SafeAreaView style={styles.container}>
       <Text style={{fontSize: 24, fontWeight: 'bold'}}>Vous n'avez pas encore scanné d'aliments...</Text>
    </SafeAreaView>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
  },
  scrollView: {
    width: "100%",
    paddingLeft: 10
  },
  images:{
    height: 100,
    width: 100,
    margin: 10,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  ingredient:{
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 10,
    borderColor: '#dedede',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  ingredientName: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})