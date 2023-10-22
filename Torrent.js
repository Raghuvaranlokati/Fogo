// vpn.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Torrent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Torrent</Text>
      <Text style={styles.content}>
        Welcome to the Torrent . This is app is going to update soon.
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

export default Torrent;
