import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          <Image
            style={styles.logo}
            source={require('./assets/teslainfo-logo.png')}
          />
        </Text>
        <Card style={styles.cardStyling}>
        <Card.Title title = "Model S"/> 
        <Card.Cover source={require('./assets/ModelS.jpeg')} />
        <Button title="Dual Motor AWD - Long Range"/>
        <Button title="Tri Motor AWD - Plaid"/>
        <Button title="Tri Motor AWD - Plaid+"/>
          <ModelS />
        </Card>

        <Card style={styles.cardStyling}>
        <Card.Title title = "Model 3"/> 
        <Card.Cover source={require('./assets/Model3.jpeg')} />
        <Button title="RWD - Standard Range Plus"/>
        <Button title="Dual Motor AWD - Long Range"/>
        <Button title="Dual Motor AWD - Performance"/>
          <Model3 />
        </Card>

        <Card style={styles.cardStyling}>
        <Card.Title title = "Model X"/> 
        <Card.Cover source={require('./assets/ModelX.jpeg')} />
        <Button title="Dual Motor AWD - Long Range"/>
        <Button title="Tri Motor AWD - Plaid"/>
          <ModelX />
        </Card>

        <Card style={styles.cardStyling}>
        <Card.Title title = "Model Y"/> 
        <Card.Cover source={require('./assets/ModelY.jpeg')} />
        <Button title="Dual Motor AWD - Long Range"/>
        <Button title="Dual Motor AWD - Performance"/>
          <ModelY />
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  },
  cardStyling: {
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    margin: 20,
    padding: 100,
    borderRadius: 10,
    fontSize: 20
  }
});

