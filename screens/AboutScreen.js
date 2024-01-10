// screens/AboutScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
     
    
      <Text style={styles.headerone}>Toby's story</Text>
      <Text style={styles.text}>
        Hi, I'm Toby, at least thats how people call me here. I'm a Japanese couch designer 
        that hopes to bring joy to the people. Because of my name being a mouthful, everyone just calls 
        me Toby here. 
        
      </Text>
      <Text style={styles.text}>
      At Toby's everyone is focused on giving the people the best quality and aestheticly pleasing couches to comfort you 
        and your family.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
  
    alignItems: 'center',
    backgroundColor: '#FDF7E4',
    padding: 20,
  },
  headerone: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#997950',
    marginBottom: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  Iconone: {
    marginRight: 10,
  },
  Icontwo: {
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 65,
    marginBottom: 26,
  },
  
  headerTextone: {
    flexDirection: 'row',
    fontSize: 14,
    borderColor: "black",
    fontWeight: "bold",
    marginRight: 26,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 20,
  },
  headerTexttwo: {
    flexDirection: 'row',
    fontSize: 14,
    borderColor: "#997950",
    fontWeight: "bold",
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

textone:{
  color: "black",
},

  texttwo: {
   marginRight: 4,
    marginTop: 2,
    paddingBottom: 2,
    color: "#997950",
  },
});

export default AboutScreen;
