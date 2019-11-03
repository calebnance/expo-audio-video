import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Home from '../screens/Home';

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const StackMain = createStackNavigator(
  {
    Home
  },
  {
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  }
);

const App = createAppContainer(StackMain);

export default App;
