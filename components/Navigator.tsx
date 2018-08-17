import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import InitialScreen from './InitialScreen';
import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
import SearchScreen from './SearchScreen';
import SearchResultScreen from './SearchResultScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
  Search: SearchScreen,
  SearchResult: SearchResultScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createSwitchNavigator({
  Initial: InitialScreen,
  App: AppStack,
  Auth: AuthStack,
});
