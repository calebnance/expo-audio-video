import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Home from '../screens/Home';
import VideoBackground from '../screens/VideoBackground';

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const StackMain = createStackNavigator(
  {
    Home,
    VideoBackground
  },
  {
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  }
);

const App = createAppContainer(StackMain);

export default App;
