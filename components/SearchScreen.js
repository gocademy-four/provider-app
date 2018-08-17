import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker } from 'react-native-picker-dropdown';

export default class SearchScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { language: 'js' };
    this.onValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(language) {
    this.setState({ language });
  }

  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mulai pencarian!</Text>
        <Text style={styles.subtitle}>Isi kolom berikut ini sesuai dengan kebutuhanmu.</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Ruby" value="ruby" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Elm" value="elm" />
        </Picker>
        <Button
          onPress={ () => Alert.alert('Do something!') }
          title="Cari Tutor"
          icon={{name: 'search'}}
          buttonStyle={{
            borderRadius:3,
            backgroundColor:'#34495e'
          }}
          containerViewStyle={{
            alignSelf: 'stretch',
            marginTop: 12,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    padding: 20,
    backgroundColor: '#91CB6F',
  },
  title: {
    fontSize: 24,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#34495e',
  },
  subtitle: {
    marginTop: 14,
    fontSize: 18,
    textAlign: 'justify',
    color: '#34495e',
  },
  picker: {
    marginTop: 14,
    marginBottom: 14,
    paddingTop: 5,
    paddingBottom: 3,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  pickerText: {
    padding: 10,
    fontSize: 14,
    color: "#34495e",
  }
});
