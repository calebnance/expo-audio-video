import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Asset } from 'expo-asset';
// import { Video } from 'expo-av';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { colors, device, fonts, gStyle } from '../constants';

// test videos
const aerialCity = require('../assets/videos/aerial-city.mp4');
const aerialWaves = require('../assets/videos/aerial-waves.mp4');
const flowers = require('../assets/videos/flowers.mp4');
const nightSky = require('../assets/videos/night-sky.mp4');

const videosObj = {
  aerialCity: { video: aerialCity },
  aerialWaves: { video: aerialWaves },
  flowers: { video: flowers },
  nightSky: { video: nightSky }
};

const ChangeVideoBackground = () => {
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [data, setData] = React.useState(null);

  const generateThumbnail = async () => {
    try {
      // load video
      const returnedData = await Promise.all(
        Object.keys(videosObj).map(async key => {
          const videoObj = videosObj[key];
          const video = await Asset.fromModule(
            videosObj[key].video
          ).downloadAsync();
          const { uri } = await VideoThumbnails.getThumbnailAsync(video.uri, {
            time: 2000
          });

          return {
            ...videoObj,
            name: key,
            uri
          };
        })
      );
      setDataLoaded(true);
      setData(returnedData);
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    console.log('useEffect');
    if (dataLoaded === false) {
      generateThumbnail();
    }
  });

  return (
    <ScrollView
      contentContainerStyle={styles.containerContent}
      showsVerticalScrollIndicator={false}
    >
      {data &&
        data.map(item => {
          return (
            <View key={item.name} style={styles.containerVideo}>
              <View style={styles.containerPreview}>
                <Image source={{ uri: item.uri }} style={styles.image} />
              </View>
              <Text style={styles.labelVideo}>{item.name}</Text>
            </View>
          );
        })}

      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => null}
        style={styles.containerText}
      >
        <Text style={styles.text}>Okay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1
  },
  containerContent: {
    ...gStyle.flex1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 16
  },
  containerVideo: {
    backgroundColor: '#999999',
    marginBottom: 16,
    marginRight: 16
  },
  containerPreview: {
    height: 180,
    padding: 8,
    width: device.width / 2 - 24
  },
  labelVideo: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 14,
    paddingBottom: 8,
    paddingHorizontal: 8
  },
  image: {
    backgroundColor: '#efefef',
    height: '100%',
    resizeMode: 'cover',
    width: '100%'
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

export default ChangeVideoBackground;
