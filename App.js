import { StackNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import ArticleScreen from './components/ArticleScreen'

export default StackNavigator({
  Home: { screen: HomeScreen },
  Article: {screen: ArticleScreen}
})
