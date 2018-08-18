import * as React from "react"
import { Text, View, StyleSheet, Alert } from "react-native"
import { Input, Button } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  lesson: string,
  price: string,
  lessonData: any[] | null
}

export default class EditLessonScreen extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      lesson: "",
      price: "",
      lessonData: null
    }
  }

  static navigationOptions = {
    title: "Pelajaran"
  }

  private populateLesson = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/teachedlesson",
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )

    if (response.status === 200) {
      this.setState({ historyData: await response.json() })
    } else {
      console.warn("Unable to fetch lessons")
    }
  }

  private editLesson = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/teachedlessons",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          member: {
            price_per_hour: this.state.price,
            lesson_name: this.state.lesson
          }
        })
      }
    )

    if (response.status === 200) {
      console.log("Success")
      this.props.navigation.navigate("Home")
    } else {
      console.warn("Unable to create lessons")
    }
  }

  componentDidMount() {
    this.populateLesson()
  }


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
          defaultValue={this.state.lessonData ? this.state.lessonData.lesson_name : ""}
          onChangeText={lesson => this.setState({ ...this.state, lesson })}
        />
        <Text style={styles.subtitle}>Harga per Jam</Text>
        <Input
          containerStyle={{marginBottom: 12, marginTop: 12}}
          placeholder="Harga per Jam"
          defaultValue={this.state.lessonData ? this.state.lessonData.price_per_hour : ""}
          onChangeText={price => this.setState({ ...this.state, price })}
        />
        <Button
          onPress={() => this.editLesson }
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
