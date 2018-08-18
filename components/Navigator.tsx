import { StyleSheet } from "react-native"
import { createSwitchNavigator, createStackNavigator } from "react-navigation"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"
import InitialScreen from "./InitialScreen"
import HomeScreen from "./HomeScreen"
import HistoryScreen from "./HistoryScreen"
import LessonListScreen from "./LessonListScreen"
import EditLessonScreen from "./EditLessonScreen"
import HistoryDetailScreen from "./HistoryDetailScreen"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

const AppStack = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
  HistoryDetail: HistoryDetailScreen,
  LessonList: LessonListScreen,
  EditLesson: EditLessonScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createSwitchNavigator({
  Initial: InitialScreen,
  App: AppStack,
  Auth: AuthStack
})
