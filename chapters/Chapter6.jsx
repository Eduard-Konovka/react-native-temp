import { useState } from 'react';
import Main from '../components/Main';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fonts = () =>
  Font.loadAsync({
    bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    light: require('../assets/fonts/Montserrat-Light.ttf'),
  });

export default function Chapter6() {
  const [font, setFont] = useState(false);

  if (font) {
    return <Main />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

Chapter6.defaultProps = {
  children: null,
};
