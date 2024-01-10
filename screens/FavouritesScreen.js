// screens/FavouritesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const FavouritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadFavorites();
  }, []);

  const clearFavorites = async () => {
    try {
      await AsyncStorage.removeItem('favorites');
      setFavorites([]);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToDetails = (id) => {
    navigation.navigate('Details', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourites</Text>
      {favorites.length > 0 ? (
        <>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigateToDetails(item.id)}>
                <View style={styles.favoriteItem}>
                  <Image style={styles.favoriteImage} source={{ uri: item.productImage }} />
                  <Text>{item.title}</Text>
                  <Text>€ {item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.clearButton} onPress={clearFavorites}>
            <Text style={styles.clearButtonText}>Clear Favorites</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>No favorites yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FDF7E4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  favoriteItem: {
    marginBottom: 16,
  },
  favoriteImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  clearButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  clearButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default FavouritesScreen;
