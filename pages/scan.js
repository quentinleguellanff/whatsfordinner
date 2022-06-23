import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image,  Alert, Button, Vibration } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import RBSheet from "react-native-raw-bottom-sheet";
import * as Haptics from 'expo-haptics'


export default function Scan( {navigation }) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [product, setProduct] = useState(null);
  const refRBSheet = useRef();


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = async ({ type, data, bounds, cornerPoints }) => {
    setScanned(true)
    refRBSheet.current.open()
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    const result = await getProductFromBarcode(data)
    setProduct(result) 
  }

  const getProductFromBarcode = async (barcode) => {
    try {
      const response = await fetch(
        `https://fr.openfoodfacts.org/api/v2/products/${barcode}`
      );
      const json = await response.json();
      console.log(json.product.image_url)
      console.log(barcode)
      return json.product;
    } catch (error) {
      console.error(error);
    }
  }

  const handleCloseBottomSheet = () => {
    setScanned(false)
    console.log(scanned)
  }

    
  return (
      <View style={styles.container}>
        <Camera style={styles.camera} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} type={CameraType.back}>
          <SafeAreaView style={styles.safeView}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={ console.log('test') }>
              <Text style={styles.text}> torchLight icon here </Text>
            </TouchableOpacity>
          </View>
            <View style={styles.scanRectContainer}>
              <View style={styles.scanRect}></View>
            </View>
          </SafeAreaView>
        </Camera>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            animationType={'slide'}
            onClose={handleCloseBottomSheet}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent"
              },
              container: {
                borderRadius: 20,
                padding: 10,
              }
            }}
          >
            <View style={styles.viewScanned}>
              <Image style={styles.alimentImage} source={{ uri: product?.image_url }}/>
              <View>
                <Text style={styles.alimentName}>{ product?.product_name }</Text>
                <Text style={styles.alimentBrand}>{ product?.brands }</Text>
              </View>
            </View>
          </RBSheet>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {
    height: '100%',
    width: '100%',
  },
  torchLight: {
  },
  camera: {
    flex: 1,
  },
  scanRectContainer: {
    position: 'absolute',
    top : 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scanRect: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    height: '35%',
    width: '90%',
  },
  text: {
    color: 'white'
  },
  alimentImage: {
    height: '75%',
    width: '30%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  viewScanned: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  alimentName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  alimentBrand: {
    fontSize: 16,
  }
});
