import { StyleSheet, View } from 'react-native';

export default function Chapter6() {
  return <View style={styles.main}></View>;
}

const styles = StyleSheet.create({
  main: { flex: 1 },
});

Chapter6.defaultProps = {
  children: null,
};
