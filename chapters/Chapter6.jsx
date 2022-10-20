import { useState } from 'react';
import { View, AppLoading } from 'react-native';
import { globalStyles } from '../styles/style';
import * as Font from 'expo-font';

const fonts = () =>
  Font.loadAsync({
    bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    light: require('../assets/fonts/Montserrat-Light.ttf'),
  });

export default function Chapter6() {
  const [font, setFont] = useState(false);

  return (
    <View>
      {font ? <View style={globalStyles.main}></View> : <AppLoading />}
    </View>
  );
}

Chapter6.defaultProps = {
  children: null,
};
