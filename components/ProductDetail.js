// components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetail = props => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductData = async () => {
      try {
        let url;
        if (Platform.OS == 'android') {
          url = "http://10.0.2.2:55915/api/detailsproduct/";
        } else {
          url = "http://devcmsex.ddev.site/api/detailsproduct/";
        }
        url += props.productId;
        const response = await fetch(url, { method: "GET" });
        const json = await response.json();
        if (Platform.OS == 'android') {
          json.productimage = json.productimage.replace('devcmsex.ddev.site', '10.0.2.2:55915');
        }
        setProduct(json);
      } catch (error) {
        console.error(error);
      }
    };

    getProductData();
  }, []);

  const addToFavorites = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem('favorites');
      let favorites = favoritesString ? JSON.parse(favoritesString) : [];

      // Check if the product is already in favorites
      const isProductInFavorites = favorites.some(fav => fav.id === product.id);
      if (!isProductInFavorites) {
        favorites.push({
          id: product.id,
          title: product.title,
          price: product.price,
          productImage: product.productimage,
        });

        // Update AsyncStorage with the new favorites list
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        
      } else {
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: product.productimage,
          }}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.colorway}>{product.colorway}</Text>
        <Text style={styles.price}>€ {product.price}</Text>
        <Text style={styles.details}>{product.details}</Text>
        <TouchableOpacity style={styles.buttonone} onPress={addToFavorites}>
          <Text style={styles.buttonTextone}>Add to Cart</Text>
        </TouchableOpacity>

        {/* Add to Favorites button */}
        <TouchableOpacity style={styles.buttontwo} onPress={addToFavorites}>
          <Text style={styles.buttonTexttwo}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    marginTop: 20,
  },
  
  buttonone: {
    backgroundColor: '#fddf93',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  
  buttonTextone: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttontwo: {
    backgroundColor: '#FDF7E4',
    padding: 10,
    borderRadius: 5,
  },
  buttonTexttwo: {
    color: '#ccc',
    textAlign: 'center',
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    fontWeight: 'bold',
    borderColor: "#ccc",
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  image: {
    height: 300,
    width: 400,
    borderRadius: 20,
  },
  wrapper: {
    padding: 24,
  },
  title: {
    color: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 24,
  },
  price: {
    lineHeight: 24,
    marginTop: 8,
  },
});

export default ProductDetail;

