import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Appointments',
    location: 'tangerang',
    price: '100k',
  },
  {
    name: 'Trips',
    location: 'tangerang',
    price: '150k',
  },
]

export default class SearchResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Result',
  };

  render() {
    return (
      <View style={styles.container}>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.name}
            titleStyle={styles.title}
            subtitle={"Lokasi: "+ item.location + "\nHarga: " + item.price + "/jam"}
            leftIcon={{ name: 'school' }}
            chevron
            onPress={() => Alert.alert(
              "Pilih tutor ini?",
              "Tekan 'Tidak' untuk membatalkan pesanan",
              [
                {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Ya', onPress: () => this.props.navigation.navigate('Home')},
              ],
              { cancelable: false }
            )}
          />
        ))
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontWeight: 'bold'
  }
});
