import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Picker } from 'react-native';

import { Card } from 'react-native-paper';

// You can import from local files
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modelSAwdLr: '1',
      modelSAwdP: '2',
      modelSAwdPP: '3',
      model3RwdSrP: '4',
      model3AwdLr: '5',
      model3AwdP: '6',
      modelXAwdLr: '7',
      modelXAwdP: '8',
      modelYAwdLr: '9',
      modelYAwdP: '10',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          <Image
            style={styles.logo}
            source={require('./assets/teslainfo-logo.png')}
          />
        </Text>

        <Card style={styles.cardStyling}>
          <View style={styles.cardHeaderContainer}>
            <Card.Title title="Model S" />
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={this.state.modelSAwdLr}
              onValueChange={(itemValue) =>
                this.setState({ modelSAwdLr: itemValue })
              }>
              <Picker.Item label="Dual Motor AWD - Long Range" value="1" />
              <Picker.Item label="Tri Motor AWD - Plaid" value="2" />
              <Picker.Item label="Tri Motor AWD - Plaid+" value="3" />
            </Picker>
          </View>
          <Card.Cover source={require('./assets/ModelS.jpeg')} />
          <ModelS />
        </Card>

        <Card style={styles.cardStyling}>
          <View style={styles.cardHeaderContainer}>
            <Card.Title title="Model 3" />
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={this.state.model3RwdSrP}
              onValueChange={(itemValue) =>
                this.setState({ model3RwdSrP: itemValue })
              }>
              <Picker.Item label="RWD - Standard Range Plus" value="4" />
              <Picker.Item label="Dual Motor AWD - Long Range" value="5" />
              <Picker.Item label="Dual Motor AWD - Performance" value="6" />
            </Picker>
          </View>
          <Card.Cover source={require('./assets/Model3.jpeg')} />
          <Model3 />
        </Card>

        <Card style={styles.cardStyling}>
          <View style={styles.cardHeaderContainer}>
            <Card.Title title="Model X" />
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={this.state.modelXAwdLr}
              onValueChange={(itemValue) =>
                this.setState({ modelXAwdLr: itemValue })
              }>
              <Picker.Item label="Dual Motor AWD - Long Range" value="7" />
              <Picker.Item label="Tri Motor AWD - Plaid" value="8" />
            </Picker>
          </View>
          <Card.Cover source={require('./assets/ModelX.jpeg')} />
          <ModelX />
        </Card>

        <Card style={styles.cardStyling}>
          <View style={styles.cardHeaderContainer}>
            <Card.Title title="Model Y" />
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={this.state.firstLanguage}
              onValueChange={(itemValue) =>
                this.setState({ firstLanguage: itemValue })
              }>
              <Picker.Item label="Dual Motor AWD - Long Range" value="9" />
              <Picker.Item label="Dual Motor AWD - Performance" value="10" />
            </Picker>
          </View>
          <Card.Cover source={require('./assets/ModelY.jpeg')} />
          <ModelY />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f6f6f6',
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
  pickerItem: {
    height: 44,
    color: 'red',
  },
  logo: {
    height: 250,
    width: 250,
  },
  cardStyling: {
    height: 575,
    width: 500,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
