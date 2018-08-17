import * as React from 'react';
import { StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any>
}

export default class InitialScreen extends React.Component<Props> {
  componentDidMount() {
    this.bootstrap();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  private async bootstrap() {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      this.props.navigation.navigate('Home', { token });
    } else {
      this.props.navigation.navigate('Login');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
