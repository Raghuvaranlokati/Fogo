import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Community = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dark web news</Text>
      <Text style={styles.content}>
we are creating official dark web news and dark web links here </Text>
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

export default Community;
