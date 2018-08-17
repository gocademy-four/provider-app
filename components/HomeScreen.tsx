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

  render() {
    return (
      <View style={styles.container}>
        <Text>Ma token:</Text>
        <Text>{this.props.navigation.getParam("token")}</Text>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
