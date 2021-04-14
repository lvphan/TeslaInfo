import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Picker } from 'react-native';

import { Card } from 'react-native-paper';

// You can import from local files
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      language: 'haxe',
      firstLanguage: 'java',
      secondLanguage: 'js',
    }
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
          <Card.Title title = "Model S" />
          <Picker
            style={styles.picker} itemStyle={styles.pickerItem}
            selectedValue={this.state.firstLanguage}
            onValueChange={(itemValue) => this.setState({firstLanguage: itemValue})}>
            <Picker.Item label="Dual Motor AWD - Long Range" value="ms-awd-lr" />
            <Picker.Item label="Tri Motor AWD - Plaid" value="ms-tri-plaid" />
            <Picker.Item label="Tri Motor AWD - Plaid+" value="ms-tri-plaid+" />
          </Picker>
        </View>
        <Card.Cover source={require('./assets/ModelS.jpeg')} />
          <ModelS />
        </Card>

 
        <Card style={styles.cardStyling}>
        <View style={styles.cardHeaderContainer}>
          <Card.Title title = "Model 3" />
          <Picker
            style={styles.picker} itemStyle={styles.pickerItem}
            selectedValue={this.state.firstLanguage}
            onValueChange={(itemValue) => this.setState({firstLanguage: itemValue})}>
            <Picker.Item label="RWD - Standard Range Plus" value="m3-rwd-sr+" />
            <Picker.Item label="Dual Motor AWD - Long Range" value="m3-awd-lr" />
            <Picker.Item label="Dual Motor AWD - Performance" value="m3-awd-p" />
          </Picker>
        </View>
        <Card.Cover source={require('./assets/Model3.jpeg')} />
          <Model3 />
        </Card>

        <Card style={styles.cardStyling}>
        <View style={styles.cardHeaderContainer}>
          <Card.Title title = "Model X" />
          <Picker
            style={styles.picker} itemStyle={styles.pickerItem}
            selectedValue={this.state.firstLanguage}
            onValueChange={(itemValue) => this.setState({firstLanguage: itemValue})}>
            <Picker.Item label="Dual Motor AWD - Long Range" value="mx-awd-lr" />
            <Picker.Item label="Tri Motor AWD - Plaid" value="mx-tri-plaid" />
          </Picker>
        </View>
        <Card.Cover source={require('./assets/ModelX.jpeg')} />
          <ModelX />
        </Card>
  
        <Card style={styles.cardStyling}>
        <View style={styles.cardHeaderContainer}>
          <Card.Title title = "Model Y" />
          <Picker
            style={styles.picker} itemStyle={styles.pickerItem}
            selectedValue={this.state.firstLanguage}
            onValueChange={(itemValue) => this.setState({firstLanguage: itemValue})}>
            <Picker.Item label="Dual Motor AWD - Long Range" value="my-awd-lr" />
            <Picker.Item label="Dual Motor AWD - Performance" value="my-awd-p" />
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
    backgroundColor: 'white',
  },
  cardHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  picker: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    margin: 5
  },
  pickerItem: {
    height: 44,
    color: 'red'
  },
  logo: {
    height: 250,
    width: 250,
  },
  cardStyling: {
    marginBottom: 15,
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
