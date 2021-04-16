import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ModelX() {
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
          {'\n'}360mi (est)
        </Text>
        <Text style={styles.paragraph}>
          <b>Top Speed:</b>
          {'\n'}155mph
        </Text>
        <Text style={styles.paragraph}>
          <b>0-60:</b>
          {'\n'}3.8 sec
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
          {'\n'}88 cu ft
        </Text>
        <Text style={styles.paragraph}>
          <b>Weight:</b>
          {'\n'}5,631 lbs / 2554.179 kgs
        </Text>
        <Text style={styles.paragraph}>
          <b>Drag Coefficient:</b>
          {'\n'}0.24 Cb
        </Text>
        <Text style={styles.paragraph}>
          <b>Powertrain:</b>
          {'\n'}Dual Motor
        </Text>
      </View>
      <Text>
        With the most power and quickest acceleration of any SUV, Model X Plaid
        is the highest performing SUV ever built. Both Long Range and Plaid
        powertrains, with updated battery architecture, can deliver instant
        torque at any speed.
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
