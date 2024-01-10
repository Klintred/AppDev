// Importeren van de nodige modules en componenten
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Platform, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import SortButton from '../components/SortButton';

// Definiëren van het ProductScreen component
const ProductScreen = ({ navigation }) => {
  // State voor het beheren van de producten en sorteervolgorde
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // Standaard sorteervolgorde is aflopend

  // Functie voor het ophalen van productgegevens
  const getProducts = async () => {
    try {
      // Bepalen van de juiste API-URL op basis van het besturingssysteem
      let url;
      if (Platform.OS == 'android') {
        url = 'http://10.0.2.2:55915/api/detailsproduct/';
      } else {
        url = 'http://devcmsex.ddev.site/api/detailsproduct/';
      }
      // Het uitvoeren van een API-aanroep om productgegevens te verkrijgen
      const response = await fetch(url, { method: 'GET' });
      const json = await response.json();
      // Bijwerken van de staat met de verkregen producten
      setProducts(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  // Het ophalen van productgegevens uitvoeren wanneer het component gemonteerd is
  useEffect(() => {
    getProducts();
  }, []);

  // Functie voor het sorteren van producten op prijs
  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });

    // Bijwerken van de sorteervolgorde en de lijst met producten
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    setProducts(sortedProducts);
  };

  // Functie voor het toevoegen van een product aan favorieten
  const addToFavorites = async (id, title, price, productImage) => {
    try {
      // Controleren of het item al in favorieten staat
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      const isAlreadyInFavorites = favorites.some(item => item.id === id);

      // Als het item nog niet in favorieten staat, voeg het dan toe
      if (!isAlreadyInFavorites) {
        const favoriteItem = { id, title, price, productImage };
        const updatedFavorites = [...favorites, favoriteItem];
        
        // Bijwerken van favorieten in AsyncStorage
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        
      } else {
        // Voeg hier eventueel aanvullende logica toe voor het geval het item al in favorieten staat
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Navigatie naar het scherm met favorieten
  const navigateToFavourites = () => {
    navigation.navigate('Favourites');
  };

  // Navigatie naar het scherm "Over ons"
  const navigateToAboutUs = () => {
    navigation.navigate('About us');
  };

  // Renderen van het ProductScreen component
  return (
    <View style={styles.screen}>
      {/* Header-component met knoppen voor favorieten en over ons */}
      <Header onPressFavourites={navigateToFavourites} onPressAboutUs={navigateToAboutUs} />
      {/* Titel van het scherm */}
      <Text style={styles.header}>Toby's Products</Text>
      {/* Knop voor het sorteren van producten */}
      <SortButton onPressSort={sortProducts} sortOrder={sortOrder} />

      {/* Lijst met producten */}
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          // Aanpassingen voor Android als dat nodig is
          if (Platform.OS == 'android') {
            item.productimage = item.productimage.replace('devcmsex.ddev.site', '10.0.2.2:55915');
          }

          // ProductItem-component voor het weergeven van een individueel product
          return (
            <ProductItem
              id={item.id}
              title={item.title}
              price={item.price}
              productImage={item.productimage}
              navigation={navigation}
              onSelectProduct={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
              onAddToFavorites={addToFavorites}
            />
          );
        }}
      />
    </View>
  );
};

// Stijlen voor het ProductScreen component
const styles = StyleSheet.create({
  // Achtergrond en marge stijlen voor het scherm
  screen: {
    padding: 24,
    backgroundColor: '#FDF7E4',
  },
  // Marge stijl voor de lijst met producten
  list: {
    marginTop: 10,
  },
  // Stijlen voor de titel van het scherm
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

// Exporteren van het ProductScreen component
export default ProductScreen;
