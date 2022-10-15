import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Спсок дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});

Header.defaultProps = {
  children: null,
};
