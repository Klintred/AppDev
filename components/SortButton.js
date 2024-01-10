// Importeren van vereiste modules en componenten
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// SortButton component met knop voor sorteren en weergave van sorteervolgorde
const SortButton = ({ onPressSort, sortOrder }) => {
  // Renderen van het SortButton component
  return (
    <TouchableOpacity onPress={onPressSort}>
      <View style={styles.sortByText}>
        <FontAwesome style={styles.icon} name="sort-amount-desc" size={20} color="black" />
        <Text style={styles.text}>
          {sortOrder === 'desc' ? 'Sort by Price (Most to Least)' : 'Sort by Price (Least to Most)'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Stijlen voor het SortButton component
const styles = StyleSheet.create({
  // Stijlen voor de sorteer-knop en tekst
  sortByText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  // Stijlen voor het sorteerpictogram
  icon: {
    marginRight: 10,
  },
  // Stijlen voor de sorteer-tekst
  text: {
    marginLeft: 8,
  },
});

// Exporteren van het SortButton component
export default SortButton;

