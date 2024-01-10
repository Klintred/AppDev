// components/ProductItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductItem = props => {
  const { id, title, price, productImage, onSelectProduct, onAddToFavorites } = props;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onSelectProduct(id)}>
      <View style={styles.productItem}>
        <Image
          style={styles.banner}
          source={{
            uri: productImage,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€ {price}</Text>

        {/* Add to Cart button */}
        <TouchableOpacity style={styles.buttonone}>
          <Text style={styles.buttonTextone}>Add to Cart</Text>
        </TouchableOpacity>

        {/* Add to Favorites button */}
        <TouchableOpacity style={styles.buttontwo} onPress={() => onAddToFavorites(id, title, price, productImage)}>
          <Text style={styles.buttonTexttwo}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ... (existing styles)

  buttonone: {
    backgroundColor: '#fddf93',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
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
    marginTop: 5,
  },
  buttonTexttwo: {
    color: '#ccc',
    textAlign: 'center',
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    fontWeight: 'bold',
    borderColor: '#ccc',
  },

  productItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#FDF7E4',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ccc',
  },
  banner: {
    height: 200,
    borderRadius: 8,
  },
  title: {
    color: '#000000',
    fontSize: 26,
    marginTop: 12,
    marginBottom: 12,
  },
  price: {
    marginBottom: 8,
  },
});

export default ProductItem;

