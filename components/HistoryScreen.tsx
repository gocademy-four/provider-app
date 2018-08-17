import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Appointments',
    location: 'Tangerang',
    lesson: 'Kimia',
    date: "27 Januari 2008",
  },
  {
    name: 'Trips',
    lesson: 'Fisika',
    location: 'Jakarta Barat',
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
        containerStyle={styles.list}
        key={i}
        title={item.name}
        titleStyle={styles.title}
        subtitle={"Pelajaran: " + item.lesson + "\n" + item.location + ", " + item.date}
        leftIcon={{ name: 'school' }}
        chevron
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
  },
  list: {
    borderColor: '#34495e',
    borderBottomWidth: 1,
  }
});
