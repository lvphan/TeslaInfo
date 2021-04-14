import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ModelS() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Information about Model S, extending this to see if it makes the box wider.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
