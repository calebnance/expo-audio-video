import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { gStyle } from '../constants';

// stacks
import StackMain from './StackMain';

// screens
import ChangeVideoBackground from '../screens/ChangeVideoBackground';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="StackMain"
        component={StackMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangeVideoBackground"
        component={ChangeVideoBackground}
        options={{
          headerTitleStyle: gStyle.navHeaderTitleStyle,
          title: 'Select a Video'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
