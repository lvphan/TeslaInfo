import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ModelS() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraphHeader}>
          <b>Specs:</b>
        </Text>
      </View>

      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          <b>Range:</b>
          {'\n'}412mi (est)
        </Text>
        <Text style={styles.paragraph}>
          <b>Top Speed:</b>
          {'\n'}155mph
        </Text>
        <Text style={styles.paragraph}>
          <b>0-60:</b>
          {'\n'}3.1 sec
        </Text>
        <Text style={styles.paragraph}>
          <b>Drive:</b>
          {'\n'}All Wheel Drive
        </Text>
      </View>

      <View>
        <Text style={styles.paragraphHeader}>
          <b>Additional Information:</b>
        </Text>
      </View>

      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          <b>Peak Power:</b>
          {'\n'}670 hp
        </Text>
        <Text style={styles.paragraph}>
          <b>Cargo Capacity:</b>
          {'\n'}28 cu ft
        </Text>
        <Text style={styles.paragraph}>
          <b>Weight:</b>
          {'\n'}4,561 lbs / 2003.064 kgs
        </Text>
        <Text style={styles.paragraph}>
          <b>Drag Coefficient:</b>
          {'\n'}0.208 Cd
        </Text>
        <Text style={styles.paragraph}>
          <b>Powertrain:</b>
          {'\n'}Dual-Motor
        </Text>
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
    padding: 24,
  },
  paragraph: {
    margin: 10,
    fontSize: 14,
  },
  paragraphContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paragraphHeader: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
