import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigation = createStackNavigator({
  Search: SearchScreen,
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Eat-n-Repeat'
  }
})

export default createAppContainer(navigation);