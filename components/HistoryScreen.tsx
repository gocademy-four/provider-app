import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any>
}

const list = [
  {
    name: 'Appointments',
    location: 'Tangerang',
    lesson: 'Kimia',
    date: "27 Januari 2008",
    telephone: "08569952260",
  },
  {
    name: 'Trips',
    lesson: 'Fisika',
    location: 'Jakarta Barat',
    date: "27 Januari 2008",
  },
]

export default class HistoryScreen extends React.Component<Props> {
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
              subtitle={"Pelajaran: " + item.lesson + "\n" + item.location + ", " + item.date + "\n" + item.telephone}
              leftIcon={{ name: 'school' }}
              chevron
              bottomDivider={true}
              onPress={() => {
                this.props.navigation.navigate('HistoryDetail', {
                  name: item.name,
                  location: item.location,
                  date: item.date,
                  lesson: item.lesson,
                  telephone: item.telephone,
                });
              }}
            />
          ))
        }
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontWeight: 'bold',
  }
});
