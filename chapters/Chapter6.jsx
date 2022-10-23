import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Loader from '../components/Loader';
import Navigate from '../components/Navigate';

export default function Chapter6() {
  const [fontIsReady, setFontIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          bold: require('../assets/fonts/Montserrat-Bold.ttf'),
          light: require('../assets/fonts/Montserrat-Light.ttf'),
        });

        // Artificially delay for two seconds to simulate a slow loading experience
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontIsReady(true);
      }
    }

    prepare();
  }, []);

  return !fontIsReady ? <Loader /> : <Navigate />;
}

Chapter6.defaultProps = {
  children: null,
};
