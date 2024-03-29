import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Asset } from 'expo-asset';
import { Video } from 'expo-av';
import { colors, device, fonts, gStyle } from '../constants';

// test video
const videoSource = require('../assets/videos/flowers.mp4');

class VideoBackground extends React.Component {
  constructor() {
    super();

    this.state = {
      videoLoaded: false
    };
  }

  async componentDidMount() {
    // load video
    await Asset.fromModule(videoSource).downloadAsync();

    // video is now loaded
    this.setState({
      videoLoaded: true
    });
  }

  render() {
    const { navigation } = this.props;
    const { videoLoaded } = this.state;

    return (
      <View style={styles.container}>
        {videoLoaded && (
          <Video
            isLooping
            isMuted
            resizeMode="cover"
            shouldPlay
            source={videoSource}
            style={{ height: device.height, width: device.width }}
          />
        )}

        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.navigate('ChangeVideoBackground')}
          style={styles.containerText}
        >
          <Text style={styles.text}>Change background video</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

VideoBackground.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1,
    ...gStyle.flexCenter
  },
  containerText: {
    backgroundColor: colors.black70,
    bottom: 0,
    position: 'absolute',
    width: device.width
  },
  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 18,
    paddingBottom: device.iOS ? 48 : 32,
    paddingHorizontal: 16,
    paddingTop: 32,
    textAlign: 'center'
  }
});

export default VideoBackground;
