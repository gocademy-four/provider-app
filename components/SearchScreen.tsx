import * as React from 'react';
import { Text, View, StyleSheet, Alert, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { Picker } from 'react-native-picker-dropdown';
import { DatePicker } from 'react-native-datepicker';

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  lesson: string
  lessonData: any[]
}

export default class SearchScreen extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
    this.state = {
      lesson: 'js',
      lessonData: null,
      //datetime: '2018-08-19 18:00',
    };
  }

  static navigationOptions = {
    title: 'Search',
  };

  private loginPressed = async () => {
  const response = await fetch(
    "https://gocademy-tutor-api-server.herokuapp.com/classes")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ lessonData }) })
    .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mulai pencarian!</Text>
        <Text style={styles.subtitle}>Isi kolom berikut ini sesuai dengan kebutuhanmu.</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.lesson}
          onValueChange={(lesson:string) => this.setState({ lesson })}
          mode="dialog"
          textStyle={styles.pickerText}
        >
        {
          lessonData.map((item, i) => (<Picker.Item label={item} value={i} />))
        }
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
