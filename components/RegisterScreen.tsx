import * as React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

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
}

export default class RegisterScreen extends React.Component<Props, State> {
  private registerPressed = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/customers", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          member: {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            'phone_number': this.state.phoneNumber,
            gender: this.state.gender,
            street: this.state.street,
            city: this.state.city
          }
        })
      }
    )

    if (response.status === 200) {
      const { token } = JSON.parse(await response.text());

      await AsyncStorage.setItem('token', token);
      this.props.navigation.navigate('Initial');
    } else {
      console.warn("Unable to register");
    }
  }

  private loginPressed = async () => {
    this.props.navigation.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Type your e-mail here"
          onChangeText={(email) => this.setState({...this.state, email})} />
        <Input
          placeholder="Type your name here"
          onChangeText={(name) => this.setState({...this.state, name})} />
        <Input
          placeholder="Type your password here"
          onChangeText={
            (password) => this.setState({...this.state, password})} />
        <Input
          placeholder="Type your phone number here"
          onChangeText={
            (phoneNumber) => this.setState({...this.state, phoneNumber})} />
        <Input
          placeholder="Type your gender here"
          onChangeText={
            (gender) => this.setState({...this.state, gender})} />
        <Input
          placeholder="Type your street here"
          onChangeText={
            (street) => this.setState({...this.state, street})} />
          <Input
        placeholder="Type your city here"
          onChangeText={
            (city) => this.setState({...this.state, city})} />

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={this.loginPressed} />
          <Button title="Register" onPress={this.registerPressed} />
        </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});
