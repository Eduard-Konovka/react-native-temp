import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, StyleSheet } from 'react-native';

export default function Ios() {
  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={[styles.box, { backgroundColor: 'yellow', flex: 3 }]}></View>
      <View style={[styles.box, { backgroundColor: 'red', flex: 2 }]}></View>
      <View style={[styles.box, { backgroundColor: 'green' }]}></View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  box: {
    flex: 1,
    backgroundColor: 'red',
  },
});

Ios.defaultProps = {
  children: null,
};
