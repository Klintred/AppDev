// Importeren van vereiste modules en componenten
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ProductDetail component voor weergave van productdetails en interactieve knoppen
const ProductDetail = (props) => {
  // State om productgegevens bij te houden
  const [product, setProduct] = useState({});

  // Functie om productgegevens op te halen bij het laden van het component
  useEffect(() => {
    const getProductData = async () => {
      try {
        // Bepalen van de API-url op basis van het besturingssysteem
        let url;
        if (Platform.OS == 'android') {
          url = "http://10.0.2.2:55915/api/detailsproduct/";
        } else {
          url = "http://devcmsex.ddev.site/api/detailsproduct/";
        }
        url += props.productId;

        // Ophalen van productgegevens van de API
        const response = await fetch(url, { method: "GET" });
        const json = await response.json();

        // Aanpassen van de productafbeeldings-URL voor Android
        if (Platform.OS == 'android') {
          json.productimage = json.productimage.replace('devcmsex.ddev.site', '10.0.2.2:55915');
        }

        // Bijwerken van de state met de opgehaalde productgegevens
        setProduct(json);
      } catch (error) {
        console.error(error);
      }
    };

    // Ophalen van productgegevens bij het laden van het component
    getProductData();
  }, []);

  // Functie om product aan favorieten toe te voegen
  const addToFavorites = async () => {
    try {
      // Ophalen van favorieten uit AsyncStorage
      const favoritesString = await AsyncStorage.getItem('favorites');
      let favorites = favoritesString ? JSON.parse(favoritesString) : [];

      // Controleren of het product al in favorieten zit
      const isProductInFavorites = favorites.some(fav => fav.id === product.id);

      // Toevoegen aan favorieten als het product nog niet in favorieten zit
      if (!isProductInFavorites) {
        favorites.push({
          id: product.id,
          title: product.title,
          price: product.price,
          productImage: product.productimage,
        });

        // Bijwerken van AsyncStorage met de nieuwe lijst met favorieten
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        
      } else {
        // Product is al in favorieten, voeg hier indien nodig extra logica toe
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Renderen van het ProductDetail component
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

        {/* Toevoegen aan favorieten knop */}
        <TouchableOpacity style={styles.buttontwo} onPress={addToFavorites}>
          <Text style={styles.buttonTexttwo}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Stijlen voor het ProductDetail component
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

// Exporteren van het ProductDetail component
export default ProductDetail;
