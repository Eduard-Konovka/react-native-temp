import { StyleSheet, View, Image, Platform } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.box}>
      <Image
        style={Platform.select({
          native: styles.imgNative,
          default: styles.imgWeb,
        })}
        source={require('../assets/loader.gif')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imgNative: {
    width: 250,
    height: 250,
  },
  imgWeb: {
    width: 500,
    height: 500,
  },
});

Loader.defaultProps = {
  children: null,
};
