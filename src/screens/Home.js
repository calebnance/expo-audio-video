import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

const Home = () => (
  <View style={[gStyle.container, gStyle.flexCenter]}>
    <Text>Home Screen</Text>
  </View>
);

export default Home;
