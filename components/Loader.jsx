import { StyleSheet, View, Image } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.box}>
      <Image style={styles.img} source={require('../assets/loader.gif')} />
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
  img: {
    width: '100%',
    height: '50%',
  },
});

Loader.defaultProps = {
  children: null,
};
