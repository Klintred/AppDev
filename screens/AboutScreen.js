// Importeren van vereiste modules en componenten
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// AboutScreen component dat informatie weergeeft over Toby's verhaal en doelen
const AboutScreen = () => {
  // Renderen van het AboutScreen component
  return (
    <View style={styles.container}>
      {/* Weergeven van de kop en tekst over Toby's verhaal */}
      <Text style={styles.headerone}>Toby's story</Text>
      <Text style={styles.text}>
        Hi, I'm Toby, at least that's how people call me here. I'm a Japanese couch designer 
        that hopes to bring joy to the people. Because my name is a mouthful, everyone just calls 
        me Toby here.
      </Text>
      <Text style={styles.text}>
        At Toby's, everyone is focused on giving people the best quality and aesthetically pleasing couches to comfort 
        you and your family.
      </Text>
    </View>
  );
};

// Stijlen voor het AboutScreen component
const styles = StyleSheet.create({
  // Containerstijlen voor het scherm
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FDF7E4',
    padding: 20,
  },
  // Stijlen voor de hoofdkop van het verhaal
  headerone: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#997950',
    marginBottom: 10,
  },
  // Stijlen voor de algemene tekst
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

// Exporteren van het AboutScreen component
export default AboutScreen;

