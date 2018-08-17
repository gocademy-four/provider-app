import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: History</Text>
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
