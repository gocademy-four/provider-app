import * as React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any>
}

export default class HomeScreen extends React.Component<Props> {
  private logoutPressed = async () => {
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Initial');
  }

  static navigationOptions = {
    headerTitle: 'Home',
    headerLeft: (
      <Button
        onPress={this.logoutPressed}
        title="Logout"
      />
    ),
  };

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
        <Button
          title="Logout"
          onPress={this.logoutPressed} />
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
