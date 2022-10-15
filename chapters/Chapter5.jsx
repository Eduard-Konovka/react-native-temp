import { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Form from '../components/Form';

export default function Chapter5() {
  const [listOfItem, setlistOfItem] = useState([
    { text: 'Купить молоко', index: 1 },
    { text: 'Помыть машину', index: 2 },
    { text: 'Купить картошку', index: 3 },
    { text: 'Стать миллионером', index: 4 },
  ]);

  return (
    <View style={styles.main}>
      <Header />
      <Form addHandler={null} />
      <FlatList
        data={listOfItem}
        renderItem={({ item }) => <ListItem el={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
});

Chapter5.defaultProps = {
  children: null,
};
