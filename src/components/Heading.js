import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../constants';

const Heading = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

Heading.propTypes = {
  // required
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 16
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 18
  }
});

export default Heading;
