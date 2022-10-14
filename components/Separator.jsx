import { StyleSheet, View } from 'react-native';

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '90%',
    marginVertical: 8,
    borderWidth: 2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

Separator.defaultProps = {
  children: null,
};
