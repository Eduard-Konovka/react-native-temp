import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Form from '../components/Form';

export default function Chapter5() {
  const [listOfItem, setlistOfItem] = useState([
    { text: 'Купить молоко', key: 1 },
    { text: 'Помыть машину', key: 2 },
    { text: 'Купить картошку', key: 3 },
    { text: 'Стать миллионером', key: 4 },
  ]);

  const addHandler = text => {
    setlistOfItem(list => [
      { text, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
  };

  const deleteHandler = key => {
    setlistOfItem(list => list.filter(el => el.key !== key));
  };

  return (
    <View style={styles.main}>
      <Header />
      <Form addHandler={addHandler} />
      <FlatList
        data={listOfItem}
        renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )}
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
