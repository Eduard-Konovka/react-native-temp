import { StyleSheet, Pressable, Text } from 'react-native';

export default function ListItem({ el }) {
  return (
    <Pressable>
      <Text style={styles.text}>
        {el.index}. {el.text}
      </Text>
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
});

ListItem.defaultProps = {
  children: null,
};
