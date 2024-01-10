// Importeren van vereiste modules en componenten
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Header component voor weergave van navigatie-opties
const Header = ({ onPressFavourites, onPressAboutUs }) => {
  // Renderen van het Header component
  return (
    <View style={styles.header}>
      {/* Favorieten knop */}
      <TouchableOpacity onPress={onPressFavourites}>
        <View style={styles.headerText}>
          <FontAwesome style={styles.icon} name="heart" size={20} color="black" />
          <Text style={styles.text}>Favourites</Text>
        </View>
      </TouchableOpacity>

      {/* About Us knop */}
      <TouchableOpacity onPress={onPressAboutUs}>
        <View style={styles.headerTextone}>
          <FontAwesome style={styles.icon} name="info-circle" size={20} color="black" />
          <Text style={styles.text}>About Us</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Stijlen voor het Header component
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginLeft: 8,
  },
  headerTextone: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

// Exporteren van het Header component
export default Header;
