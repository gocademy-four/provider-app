import * as React from "react"
import { StyleSheet, Text, ScrollView, AsyncStorage } from "react-native"
import { Input, Button } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  email: string
  name: string
  password: string
  phoneNumber: string
  gender: string
  street: string
  city: string
  lesson: string
  price: string
}

export default class RegisterScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: "Daftar"
  }

  private registerPressed = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/tutors",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          member: {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            phone_number: this.state.phoneNumber,
            gender: this.state.gender,
            street: this.state.street,
            city: this.state.city
          }
        })
      }
    )

    const response2 = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/teachedlesson",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          member: {
            lesson: this.state.lesson,
            price: this.state.price
          }
        })
      }
    )

    if (response.status === 200) {
      const { token } = JSON.parse(await response.text())

      await AsyncStorage.setItem("token", token)

      if (response2.status === 200) {
        console.log("Lesson created")
      } else {
        console.warn("Lesson not created")
      }

      this.props.navigation.navigate("Initial")
    } else {
      console.warn("Unable to register")
    }
  }

  private loginPressed = async () => {
    this.props.navigation.pop()
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ marginBottom: 14 }}>
          Berbagi ilmu, hanya dengan sentuhan jari
        </Text>
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "email" }}
          placeholder="E-mail"
          onChangeText={email => this.setState({ ...this.state, email })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "person" }}
          placeholder="Nama"
          onChangeText={name => this.setState({ ...this.state, name })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "lock" }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ ...this.state, password })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "phone" }}
          placeholder="Nomor telepon"
          onChangeText={phoneNumber =>
            this.setState({ ...this.state, phoneNumber })
          }
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "wc" }}
          placeholder="Jenis Kelamin"
          onChangeText={gender => this.setState({ ...this.state, gender })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "home" }}
          placeholder="Alamat"
          onChangeText={street => this.setState({ ...this.state, street })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "domain" }}
          placeholder="Kota"
          onChangeText={city => this.setState({ ...this.state, city })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "book" }}
          placeholder="Pelajaran"
          onChangeText={lesson => this.setState({ ...this.state, lesson })}
        />
        <Input
          containerStyle={styles.input}
          leftIcon={{ name: "local-offer" }}
          placeholder="Harga per Jam"
          onChangeText={price => this.setState({ ...this.state, price })}
        />
        <Button title="Daftar" onPress={this.registerPressed} />

        <Text style={{ marginTop: 20 }}>Sudah punya akun?</Text>
        <Text style={{ color: "blue" }} onPress={this.loginPressed}>
          Masuk sekarang
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  input: {
    marginBottom: 12
  },
  buttonContainer: {
    flexDirection: "row"
  }
})
