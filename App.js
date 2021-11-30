import React, { useState } from 'react';
import Home from './screens/home';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'

const getFonts = () => Font.loadAsync({
  'montserat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'montserat-medium': require('./assets/fonts/Montserrat-Medium.ttf')
});

export default function App() {

  return (
    <Navigator />
  )
}