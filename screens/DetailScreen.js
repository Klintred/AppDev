// Importeren van vereiste modules en componenten
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Importeren van het ProductDetail component
import ProductDetail from '../components/ProductDetail';

// DetailScreen component dat het ProductDetail component weergeeft voor een specifiek product
const DetailScreen = ({ route, navigation }) => {
  // Extraheren van het id-parameter uit de navigatieroute
  const { id } = route.params;

  // Renderen van het DetailScreen component
  return (
    <View style={styles.screen}>
      {/* Weergeven van het ProductDetail component met het geëxtraheerde product id */}
      <ProductDetail productId={id} />
    </View>
  );
};

// Stijlen voor het DetailScreen component
const styles = StyleSheet.create({
  // Containerstijlen voor het scherm
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FDF7E4",
  },
});

// Exporteren van het DetailScreen component
export default DetailScreen;
