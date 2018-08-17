import * as React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import MainMenuCard from './MainMenuCard';

interface Props {
  navigation: NavigationScreenProp<any>
}

export default class HomeScreen extends React.Component<Props> {
  static navigationOptions =
    ({ navigation }: { navigation: NavigationScreenProp<any> }) => ({
      headerTitle: 'Home',
      headerLeft: (
        <Button
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            navigation.navigate('Initial');
          }}
          title="Logout"
        />
      ),
    });

  render() {
    return (
      <View style={styles.container}>
        <MainMenuCard
          name="Cari Tutor"
          subtitle="Sudah siap belajar bersama GO-TUTOR? Ayo cari gurunya!"
          button="Mulai cari tutor"
          onPress={() => this.props.navigation.navigate('Search')}
          color='#91CB6F'
          icon='search'
        />
        <MainMenuCard
          name="Log Pesanan"
          subtitle="Masih lupa besok belajar dengan siapa? Yuk, lihat catatannya!"
          button="Buka log pesanan"
          onPress={() => this.props.navigation.navigate('History')}
          color='#88AA77'
          icon='history'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
