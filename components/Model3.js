import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Model3() {
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
          {'\n'}263mi (est)
        </Text>
        <Text style={styles.paragraph}>
          <b>Top Speed:</b>
          {'\n'}140mph
        </Text>
        <Text style={styles.paragraph}>
          <b>0-60:</b>
          {'\n'}5.3 sec
        </Text>
        <Text style={styles.paragraph}>
          <b>Drive:</b>
          {'\n'}Rear-Wheel Drive
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
          {'\n'}N/A
        </Text>
        <Text style={styles.paragraph}>
          <b>Cargo Capacity:</b>
          {'\n'}15 cu ft
        </Text>
        <Text style={styles.paragraph}>
          <b>Weight:</b>
          {'\n'}3,582 lbs / 1624.768 kgs
        </Text>
        <Text style={styles.paragraph}>
          <b>Drag Coefficient:</b>
          {'\n'}N/A
        </Text>
        <Text style={styles.paragraph}>
          <b>Powertrain:</b>
          {'\n'}Single Motor
        </Text>
      </View>
      <Text>
        Model 3 comes with the option of dual motor all-wheel drive, 20”
        Überturbine Wheels and Performance Brakes and lowered suspension for
        total control, in all weather conditions. And a carbon fiber spoiler
        improves stability at high speeds, all allowing Model 3 to accelerate
        from 0-60 mph* in as little as 3.1 seconds.
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
