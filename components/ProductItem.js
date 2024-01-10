// Importeren van vereiste modules en componenten
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// ProductItem component voor weergave van productgegevens en interactieve knoppen
const ProductItem = (props) => {
  // Extraheren van eigenschappen uit props
  const { id, title, price, productImage, onSelectProduct, onAddToFavorites } = props;

  // Renderen van het ProductItem component
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onSelectProduct(id)}>
      <View style={styles.productItem}>
        {/* Weergeven van productafbeelding */}
        <Image
          style={styles.banner}
          source={{
            uri: productImage,
          }}
        />
        {/* Weergeven van producttitel */}
        <Text style={styles.title}>{title}</Text>
        {/* Weergeven van productprijs */}
        <Text style={styles.price}>€ {price}</Text>

        {/* Toevoegen aan winkelwagen knop */}
        <TouchableOpacity style={styles.buttonone}>
          <Text style={styles.buttonTextone}>Add to Cart</Text>
        </TouchableOpacity>

        {/* Toevoegen aan favorieten knop */}
        <TouchableOpacity style={styles.buttontwo} onPress={() => onAddToFavorites(id, title, price, productImage)}>
          <Text style={styles.buttonTexttwo}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// Stijlen voor het ProductItem component
const styles = StyleSheet.create({
  // Stijlen voor de toevoegen aan winkelwagen knop
  buttonone: {
    backgroundColor: '#fddf93',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  // Stijlen voor de toevoegen aan winkelwagen knop tekst
  buttonTextone: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // Stijlen voor de toevoegen aan favorieten knop
  buttontwo: {
    backgroundColor: '#FDF7E4',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },

  // Stijlen voor de toevoegen aan favorieten knop tekst
  buttonTexttwo: {
    color: '#ccc',
    textAlign: 'center',
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    fontWeight: 'bold',
    borderColor: '#ccc',
  },

  // Stijlen voor het gehele productitem
  productItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#FDF7E4',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ccc',
  },

  // Stijlen voor de productafbeelding
  banner: {
    height: 200,
    borderRadius: 8,
  },

  // Stijlen voor de producttitel
  title: {
    color: '#000000',
    fontSize: 26,
    marginTop: 12,
    marginBottom: 12,
  },

  // Stijlen voor de productprijs
  price: {
    marginBottom: 8,
  },
});

// Exporteren van het ProductItem component
export default ProductItem;

