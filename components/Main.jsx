import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyle } from '../styles/style';
import ModalForm from './ModalForm';
import db from '../db';

export default function Main({ navigation }) {
  const [news, setNews] = useState(db);
  const [modalWindiw, setModalWindiw] = useState(false);

  const addArticle = article => {
    setNews(list => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindiw(false);
  };

  return (
    <View style={globalStyle.main}>
      <Modal visible={modalWindiw}>
        <View style={globalStyle.main}>
          <Ionicons
            name="close-circle"
            size={50}
            color="red"
            style={styles.icon}
            onPress={() => setModalWindiw(false)}
          />

          <Text style={styles.title}>Форма добавления статей</Text>

          <ModalForm addArticle={addArticle} />
        </View>
      </Modal>

      <Ionicons
        name="add-circle"
        size={50}
        color="green"
        style={[styles.icon, styles.iconAdd]}
        onPress={() => setModalWindiw(true)}
      />

      <Text style={[globalStyle.title, styles.header]}>Главная страница</Text>

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.item, item.pressingStyle]}
            onPressIn={() => {
              setNews(
                [...news].map(obj =>
                  obj === item
                    ? { ...obj, pressingStyle: styles.pressIn }
                    : { ...obj, pressingStyle: styles.pressOut },
                ),
              );
            }}
            onPressOut={() => {
              setNews(
                [...news].map(obj => ({
                  ...obj,
                  pressingStyle: styles.pressOut,
                })),
              );
            }}
            onPress={() => navigation.navigate('FullInfo', item)}
          >
            <Image source={{ uri: item.img }} style={styles.image} />

            <Text style={styles.title}>{item.name}</Text>

            <Text style={styles.anonc}>{item.anonc}</Text>
          </Pressable>
        )}
      />

      <Button
        title="Контакты"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
  iconAdd: {
    marginBottom: 15,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  pressOut: {
    opacity: 1,
  },
  pressIn: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15,
    color: '#474747',
  },
  anonc: {
    fontFamily: 'light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#353535',
  },
});

Main.defaultProps = {
  children: null,
};
