// screens/ProductScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import ProductItem from '../components/ProductItem';

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:55476/api/detailsproduct/";
      } else {
        url = "http://devcmsex.ddev.site/api/detailsproduct/";
      }
      const response = await fetch(url, { method: "GET" });
      const json = await response.json();
      setProducts(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Toby's Products</Text>
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            item.productimage = item.productimage.replace('devcmsex.ddev.site', '10.0.2.2:55476');
          }

          return (
            <ProductItem
              id={item.id}
              title={item.title}
              price={item.price}
              productImage={item.productimage}
              navigation={navigation}
              onSelectProduct={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#FDF7E4",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
  },
});

export default ProductScreen;
