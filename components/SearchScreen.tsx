import * as React from 'react';
import { Text, View, StyleSheet, Alert, Platform } from 'react-native';
import { Button } from 'react-native-elements';
// @ts-ignore
import { Picker } from 'react-native-picker-dropdown';

interface State {
  language: string
}

export default class SearchScreen extends React.Component<{}, State> {
  constructor(props: {}, context?: any) {
    super(props, context);
    this.state = { language: 'js' };
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
          onValueChange={(language: string) => this.setState({ language })}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Ruby" value="ruby" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Elm" value="elm" />
        </Picker>
        <Button
          onPress={ () => this.props.navigation.navigate('SearchResult') }
          title="Cari Tutor"
          icon={{name: 'search', color: 'white'}}
          buttonStyle={{
            borderRadius: 3,
            backgroundColor: '#34495e'
          }}
          containerStyle={{
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
    padding: 20,
    backgroundColor: '#ecf0f1',
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
    color: "#34495e",
    ...(Platform.OS === 'ios' ? { fontSize: 14 } : {})
  }
});
