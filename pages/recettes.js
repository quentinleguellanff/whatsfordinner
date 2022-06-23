import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Recettes() {
  const [dataRecettes, setDataRecettes] = useState([])

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyRecettes}>
        {
            dataRecettes.map(recette => {
              recette =
              <View key={dataRecettes.id} style={styles.recette}>
                <Image
                  style={styles.images}
                  source={dataRecettes.image}
                  />
                <View style={styles.containerRecette}>
                  <Text style={styles.title}>{dataRecettes.name}</Text>
                  <Text style={styles.description}>{dataRecettes.description}</Text>
                </View>
              </View>;
            })
        }



        <View style={styles.recette}>
          <Image
            style={styles.images}
            source={require('../images/pennesauceauchorizolight-1000x500.jpg')}
            />
          <View style={styles.containerRecette}>
            <Text style={styles.title}>Pate sauce tomate</Text>
            <Text style={styles.description}>La vraie recette italienne de la pasta alla carbonara...</Text>
          </View>
        </View>

        <View style={styles.recette}>
          <Image
            style={styles.images}
            source={require('../images/pennesauceauchorizolight-1000x500.jpg')}
            />
          <View style={styles.containerRecette}>
            <Text style={styles.title}>Pate sauce tomate</Text>
            <Text style={styles.description}>La vraie recette italienne de la pasta alla carbonara...</Text>
          </View>
        </View>

        <View style={styles.recette}>
          <Image
            style={styles.images}
            source={require('../images/pennesauceauchorizolight-1000x500.jpg')}
            />
          <View style={styles.containerRecette}>
            <Text style={styles.title}>Pate sauce tomate</Text>
            <Text style={styles.description}>La vraie recette italienne de la pasta alla carbonara...</Text>
          </View>
        </View>

        <View style={styles.recette}>
          <Image
            style={styles.images}
            source={require('../images/pennesauceauchorizolight-1000x500.jpg')}
            />
          <View style={styles.containerRecette}>
            <Text style={styles.title}>Pate sauce tomate</Text>
            <Text style={styles.description}>La vraie recette italienne de la pasta alla carbonara...</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  bodyRecettes: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  scrollview:{
    backgroundColor: 'red',
  },
  images:{
    resizeMode: "cover",
    width: '80%',
    height: '70%',
    borderRadius: 40
  },
  recette:{
    width: '45%',
    height: '35%',
    alignItems: "center",
    marginBottom: 50
  },
  containerRecette:{
    backgroundColor: 'white',
    width: '100%',
    height: '45%',
    position: "absolute",
    top: '55%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title:{
    fontSize: 15,
    marginBottom: 10
  },
  description:{
    fontSize: 12,
  }
});