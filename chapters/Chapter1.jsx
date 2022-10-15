import { View, Platform, StyleSheet } from 'react-native';
import Ios from '../platforms/Ios';
import Android from '../platforms/Android';

export default function Chapter1() {
  return (
    <View style={styles.main}>
      {Platform.OS === 'android' ? <Android /> : <Ios />}
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
});

Chapter1.defaultProps = {
  children: null,
};
