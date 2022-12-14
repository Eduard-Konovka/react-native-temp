import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Form({ addHandler }) {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
      />
      <Button
        title="Добавить задачу"
        color="green"
        onPress={() => addHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '60%',
    marginVertical: 30,
    marginHorizontal: '20%',
    padding: 10,
    borderBottomWidth: 1,
  },
});

Form.defaultProps = {
  children: null,
};
