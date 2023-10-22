// vpn.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Anyvideo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>video Format</Text>
      <Text style={styles.content}>
        Welcome to this page this will going to update soon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Anyvideo;
