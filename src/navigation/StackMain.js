import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { gStyle } from '../constants';

// screens
import Home from '../screens/Home';
import VideoBackground from '../screens/VideoBackground';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: gStyle.navHeaderTitleStyle,
          title: 'Home'
        }}
      />
      <Stack.Screen
        name="VideoBackground"
        component={VideoBackground}
        options={{
          headerTitleStyle: gStyle.navHeaderTitleStyle,
          title: 'Video Background'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
