// screens/ProductScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Platform, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import SortButton from '../components/SortButton';

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order is descending

  const getProducts = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = 'http://10.0.2.2:55915/api/detailsproduct/';
      } else {
        url = 'http://devcmsex.ddev.site/api/detailsproduct/';
      }
      const response = await fetch(url, { method: 'GET' });
      const json = await response.json();
      setProducts(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });

    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    setProducts(sortedProducts);
  };

  const addToFavorites = async (id, title, price, productImage) => {
    try {
      // Check if the item is already in favorites
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      const isAlreadyInFavorites = favorites.some(item => item.id === id);

      if (!isAlreadyInFavorites) {
        const favoriteItem = { id, title, price, productImage };
        const updatedFavorites = [...favorites, favoriteItem];
        
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        
      } else {
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToFavourites = () => {
    navigation.navigate('Favourites');
  };

  const navigateToAboutUs = () => {
    navigation.navigate('About us');
  };

  return (
    <View style={styles.screen}>
      <Header onPressFavourites={navigateToFavourites} onPressAboutUs={navigateToAboutUs} />
      <Text style={styles.header}>Toby's Products</Text>
      <SortButton onPressSort={sortProducts} sortOrder={sortOrder} />

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            item.productimage = item.productimage.replace('devcmsex.ddev.site', '10.0.2.2:55915');
          }

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

const styles = StyleSheet.create({
  // ... (existing styles)

  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  screen: {
    padding: 24,
    backgroundColor: '#FDF7E4',
  },
  list: {
    marginTop: 10,
  },
});

export default ProductScreen;
