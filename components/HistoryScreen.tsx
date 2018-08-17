import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Appointments',
    location: 'tangerang',
    lesson: 'kimia',
    date: "27 Januari 2008",
  },
  {
    name: 'Trips',
    lesson: 'fisika',
    date: "27 Januari 2008",
  },
]

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
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
        subtitle={"Pelajaran: " + item.lesson + "\n" + item.date}
        leftIcon={{ name: 'school' }}
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
    fontWeight: 'bold',
  }
});
