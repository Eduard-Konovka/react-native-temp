import { View, StyleSheet } from 'react-native';
import Chapter1 from './chapters/Chapter1';
import Chapter5 from './chapters/Chapter5';
import Chapter6 from './chapters/Chapter6';

const chapter1 = false;
const chapter5 = false;
const chapter6 = true;

export default function App() {
  return (
    <View style={styles.main}>
      {chapter1 && <Chapter1 />}
      {chapter5 && <Chapter5 />}
      {chapter6 && <Chapter6 />}
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
});
