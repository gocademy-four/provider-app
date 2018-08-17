import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createSwitchNavigator({
  // Loading: LoadingScreen,
  // App: AppStack,
  Auth: AuthStack,
});
