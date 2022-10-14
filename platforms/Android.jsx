import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import Separator from '../components/Separator';

const buttonClick = () =>
  Alert.alert('Героям слава!', 'Выбирите действие', [
    {
      text: 'Yes',
      onPress: () => console.log('Clicks Yes button'),
    },
    {
      text: 'No',
      onPress: () => console.log('Clicks No button'),
    },
  ]);

const buttonClick2 = () =>
  Alert.alert('Смерть ворогам!', 'Выбирите действие', [
    {
      text: 'Yes',
      onPress: () => console.log('Clicks Yes button'),
    },
    {
      text: 'No',
      onPress: () => console.log('Clicks No button'),
    },
  ]);
const textPress = () => Alert.alert('Text pressed');

export default function Android() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={textPress}>
        Hello, world!
      </Text>
      <Button
        onPress={buttonClick}
        title="Слава Україні!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Separator />
      <Button
        onPress={buttonClick2}
        title="Слава Нації!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Separator />
      <Pressable onPress={buttonClick}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/80203865?s=400&u=d0e491aecc78f03372cead8c427045ed614c92c1&v=4',
          }}
          style={styles.img}
        />
      </Pressable>
      <Separator />
      <Image
        source={require('../assets/react.png')}
        style={[styles.img, img, { backgroundColor: 'magenta' }]}
        blurRadius={2}
      />
      <View style={styles.div}>
        <Text>(((((((((((((---)))))))))))))</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const img = { width: 225 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 5,
    margin: 20,
    backgroundColor: 'green',
    color: '#ffffff',
  },
  img: {
    width: 200,
    height: 200,
  },
  div: {
    width: '40%',
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'silver',
    backgroundColor: Platform.OS === 'android' ? 'yellow' : 'orange',
    position: 'absolute',
    top: -4,
  },
});

Android.defaultProps = {
  children: null,
};
