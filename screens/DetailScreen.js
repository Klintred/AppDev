// screens/DetailScreen.js
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import ProductDetail from '../components/ProductDetail';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <ProductDetail productId={id} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FDF7E4",
  },
});

export default DetailScreen;
