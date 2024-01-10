// components/SortButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SortButton = ({ onPressSort, sortOrder }) => {
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

const styles = StyleSheet.create({
  sortByText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginLeft: 8,
  },
});

export default SortButton;
