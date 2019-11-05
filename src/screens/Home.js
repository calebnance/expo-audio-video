import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Heading from '../components/Heading';
import TouchLineItem from '../components/TouchLineItem';

const Home = ({ navigation }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={[gStyle.container, gStyle.pH16]}
  >
    <Heading text="Audio" />

    <TouchLineItem onPress={() => null} text="Record Audio" />
    <TouchLineItem onPress={() => null} text="Record Audio" />
    <TouchLineItem onPress={() => null} text="Record Audio" />
    <TouchLineItem onPress={() => null} text="Record Audio" />

    <View style={gStyle.spacer16} />

    <Heading text="Video" />

    <TouchLineItem
      onPress={() => navigation.navigate('VideoBackground')}
      text="Video Background"
    />
    <TouchLineItem onPress={() => null} text="Video Background" />
    <TouchLineItem onPress={() => null} text="Video Background" />
    <TouchLineItem onPress={() => null} text="Video Background" />
  </ScrollView>
);

Home.navigationOptions = {
  headerTitleStyle: gStyle.navHeaderTitleStyle,
  title: 'Home'
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
