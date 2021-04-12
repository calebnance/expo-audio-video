import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { func } from './src/constants';

import StackMain from './src/navigation/StackMain';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onError={() => {
            // console.warn
          }}
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <StackMain />
      </React.Fragment>
    );
  }
}
