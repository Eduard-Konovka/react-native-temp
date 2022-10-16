import { useState } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
  const [press, setPress] = useState(styles.pressOut);

  return (
    <Pressable
      style={press}
      onPressIn={() => setPress(styles.pressIn)}
      onPressOut={() => deleteHandler(el.key)}
    >
      <Text style={styles.text}>{el.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    width: '60%',
    padding: 20,
    marginLeft: '20%',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#fafafa',
    color: '#525252',
  },
  pressOut: {
    opacity: 1,
  },
  pressIn: {
    opacity: 0.2,
  },
});

ListItem.defaultProps = {
  children: null,
};
