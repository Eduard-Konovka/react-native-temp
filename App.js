import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  const buttonClick = () => Alert.alert('Button pressed');
  const textPress = () => Alert.alert('Text pressed');

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={textPress}>
        Hello, World!
      </Text>
      <Button
        onPress={buttonClick}
        title="Click me!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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
});
