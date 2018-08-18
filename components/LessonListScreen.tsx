import * as React from "react"
import {
  Text,
  View,
  StyleSheet,
  Platform,
  ActivityIndicator
} from "react-native"
import { Button, ListView } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"
// @ts-ignore
import { Picker } from "react-native-picker-dropdown"

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  lessonData: any[] | null
}

export default class SearchScreen extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      lessonData: null
    }
  }

  static navigationOptions = {
    title: "Pelajaran"
  }

  private populateLessons = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/classes",
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )

    if (response.status === 200) {
      this.setState({ lessonData: await response.json() })
    } else {
      console.warn("Unable to fetch classes")
    }
  }

  componentDidMount() {
    this.populateLessons()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Daftar pelajaran</Text>
        <Text style={styles.subtitle}>
          Berikut ini adalah daftar materi yang kamu bersedia ajarkan. Klik nama pelajaran untuk mengubah rincian dan harga.
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("EditLesson")}
          title="Tambah Pelajaran"
          icon={{ name: "add", color: "white" }}
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
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ecf0f1"
  },
  title: {
    fontSize: 24,
    alignSelf: "flex-start",
    fontWeight: "bold",
    textAlign: "justify",
    color: "#34495e"
  },
  subtitle: {
    marginTop: 14,
    fontSize: 18,
    textAlign: "justify",
    color: "#34495e"
  },
  picker: {
    marginTop: 14,
    paddingTop: 5,
    paddingBottom: 3,
    borderRadius: 3,
    backgroundColor: "white"
  },
  pickerText: {
    padding: 10,
    color: "#34495e",
    ...(Platform.OS === "ios" ? { fontSize: 14 } : {})
  },
})
