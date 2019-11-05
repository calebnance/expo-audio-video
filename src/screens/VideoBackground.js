import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { Video } from 'expo-av';
import { colors, device, fonts, gStyle } from '../constants';

// test video
const videoSource = require('../assets/videos/flowers.mp4');

class VideoBackground extends React.Component {
  constructor(props) {
    super(props);

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
        <View style={styles.containerText}>
          <Text style={styles.text}>Change background video</Text>
        </View>
      </View>
    );
  }
}

VideoBackground.navigationOptions = {
  headerTitleStyle: gStyle.navHeaderTitleStyle,
  title: 'Video Background'
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
