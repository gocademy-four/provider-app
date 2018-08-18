import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

export default class HistoryDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Rincian',
  };

  render() {
    const list = [
      {
        title: 'Nama',
        subtitle: this.props.navigation.getParam('name', 'Unnamed'),
      },
      {
        title: 'Pelajaran',
        subtitle: this.props.navigation.getParam('lesson', 'No lesson'),
      },
      {
        title: 'Lokasi',
        subtitle: this.props.navigation.getParam('location', 'Unlocated'),
      },
      {
        title: 'Harga/jam',
        subtitle: this.props.navigation.getParam('price', 'Free'),
      }
    ]

    return (
      <View style={styles.container}>
      <Text style={styles.header}>Rincian Pesanan</Text>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            titleStyle={styles.title}
            subtitle={item.subtitle}
            subtitleStyle={styles.subtitle}
            bottomDivider={true}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        ))
      }
      <Button
        onPress={() => Alert.alert(
          "Pesan ulang tutor ini?",
          "Tekan 'Tidak' untuk membatalkan pesanan",
          [
            {text: 'Tidak', onPress: () => console.log('No Pressed'), style: 'cancel'},
            {text: 'Ya', onPress: () => this.props.navigation.navigate('History')}
          ],
          { cancelable: false }
        )}
        title="Pesan Ulang Tutor"
        icon={{name: 'schedule', color: 'white'}}
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
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 14,
    color: '#34495e',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: '#007aff',
    fontSize: 18,
  }
});
