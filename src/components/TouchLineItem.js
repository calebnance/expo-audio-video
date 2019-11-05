import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts, gStyle } from '../constants';

// icons
import SvgChevronRight from './icons/Svg.ChevronRight';

const TouchLineItem = ({ onPress, text }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={styles.container}
  >
    <Text style={styles.text}>{text}</Text>
    <View style={styles.containerIcon}>
      <SvgChevronRight />
    </View>
  </TouchableOpacity>
);

TouchLineItem.propTypes = {
  // required
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flexRowSpace,
    ...gStyle.pV16,
    borderBottomWidth: 1
  },
  containerIcon: {
    paddingRight: 8
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 14
  }
});

export default TouchLineItem;
