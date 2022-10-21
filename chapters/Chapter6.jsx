import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import Loader from '../components/Loader';
import Main from '../components/Main';

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
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return !fontIsReady ? <Loader /> : <Main />;
}

Chapter6.defaultProps = {
  children: null,
};
