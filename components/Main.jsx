import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Pressable,
} from 'react-native';
import { globalStyle } from '../styles/style';

export default function Main({ navigation }) {
  const [pressingStyle, setPressingStyle] = useState(styles.pressOut);
  const [news, setNews] = useState([
    { name: 'Google', anonc: 'Google!!!', full: 'Google is cool!' },
    { name: 'Apple', anonc: 'Apple!!!', full: 'Apple is cool!' },
    { name: 'FaceBook', anonc: 'FaceBook!!!', full: 'FaceBook is cool!' },
  ]);

  const loadScene = (scene, obj) => {
    navigation.navigate(scene, obj);
  };

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <Pressable
            style={pressingStyle}
            onPressIn={() => setPressingStyle(styles.pressIn)}
            onPressOut={() => {
              setPressingStyle(styles.pressOut);
              loadScene('FullInfo', item);
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.anonc}</Text>
          </Pressable>
        )}
      />
      <Button title="Контакты" onPress={() => loadScene('Contacts')} />
    </View>
  );
}

const styles = StyleSheet.create({
  pressOut: {
    opacity: 1,
  },
  pressIn: {
    opacity: 0.5,
  },
});

Main.defaultProps = {
  children: null,
};
