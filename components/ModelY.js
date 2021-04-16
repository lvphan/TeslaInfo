import * as React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';

export default function ModelY() {
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
          {'\n'}326mi (est)
        </Text>
        <Text style={styles.paragraph}>
          <b>Top Speed:</b>
          {'\n'}135mph
        </Text>
        <Text style={styles.paragraph}>
          <b>0-60:</b>
          {'\n'}4.8 sec
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
          {'\n'}N/A
        </Text>
        <Text style={styles.paragraph}>
          <b>Cargo Capacity:</b>
          {'\n'}68 cu ft
        </Text>
        <Text style={styles.paragraph}>
          <b>Weight:</b>
          {'\n'}4,416 lbs / 2003.064 kgs
        </Text>
        <Text style={styles.paragraph}>
          <b>Drag Coefficient:</b>
          {'\n'}N/A
        </Text>
        <Text style={styles.paragraph}>
          <b>Powertrain:</b>
          {'\n'}Dual Motor
        </Text>
      </View>
      <Text>
        Tesla All-Wheel Drive has two ultra-responsive, independent electric
        motors that digitally control torque to the front and rear wheels—for
        far better handling, traction and stability control. Model Y is capable
        in rain, snow, mud and off-road.
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
