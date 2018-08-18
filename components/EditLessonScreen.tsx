import * as React from "react"
import { Text, View, StyleSheet, Alert } from "react-native"
import { Input, Button } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  lesson: string,
  price: string
}

export default class EditLessonScreen extends React.Component<Props> {
  static navigationOptions = {
    title: "Pelajaran"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rincian Pelajaran</Text>
        <Text style={styles.subtitle}>Nama Pelajaran</Text>
        <Input
          containerStyle={{marginBottom: 12, marginTop: 12}}
          placeholder="Nama Pelajaran"
          defaultValue={this.props.navigation.getParam("lesson", null)}
          onChangeText={lesson => this.setState({ ...this.state, lesson })}
        />
        <Text style={styles.subtitle}>Harga per Jam</Text>
        <Input
          containerStyle={{marginBottom: 12, marginTop: 12}}
          placeholder="Harga per Jam"
          defaultValue={this.props.navigation.getParam("price", null)}
          onChangeText={price => this.setState({ ...this.state, price })}
        />
        <Button
          onPress={() =>
            Alert.alert(
              "Ubah rincian?",
              "Tekan 'Tidak' untuk membatalkan perubahan",
              [
                {
                  text: "Tidak",
                  onPress: () => console.log("No Pressed"),
                  style: "cancel"
                },
                {
                  text: "Ya",
                  onPress: () => this.props.navigation.navigate("EditLesson")
                }
              ],
              { cancelable: false }
            )
          }
          title="Ubah Rincian Pelajaran"
          icon={{ name: "edit", color: "white" }}
          buttonStyle={{
            borderRadius: 3,
            backgroundColor: "#34495e"
          }}
          containerStyle={{
            alignSelf: "stretch",
            marginTop: 12
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 14,
    color: "#34495e"
  },
  subtitle: {
    marginTop: 14,
    fontSize: 16,
    textAlign: "justify",
    paddingLeft: 10,
    color: "#34495e",
  }
})
