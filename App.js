import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
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
      <TouchableWithoutFeedback onPress={buttonClick}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/80203865?s=400&u=d0e491aecc78f03372cead8c427045ed614c92c1&v=4',
            width: 200,
            height: 200,
          }}
        />
      </TouchableWithoutFeedback>
      <Separator />
      <Image
        source={require('./assets/react.png')}
        style={{ width: 230, height: 200 }}
        blurRadius={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
