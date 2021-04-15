import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ModelY() {
  return (
    <View style={styles.container}>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          <b>Range:</b>{"\n"}412mi (est)
        </Text>
        <Text style={styles.paragraph}>
          <b>Top Speed:</b>{"\n"}155mph
        </Text>
        <Text style={styles.paragraph}>
          <b>0-60:</b>{"\n"}3.1 sec
        </Text>
        
        <Text style={styles.paragraph}>
        <b>Drive:</b>{"\n"}All Wheel Drive</Text>
        
      </View>

      <Text>
        With the longest range and quickest acceleration of any electric vehicle
        in production, Model S Plaid is the highest performing sedan ever built.
        Both Long Range and Plaid powertrains, with updated battery
        architecture, are capable of back-to-back, consistent 1/4 mile runs.
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
    margin: 10,
    fontSize: 14,
  },
  paragraphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
