import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { globalStyle } from '../styles/style';

export default function FullInfo({ navigation, route }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyle.main}>
      <Image source={{ uri: route.params.img }} style={styles.image} />
      <Text style={[globalStyle.title, styles.header]}>
        {route.params.name}
      </Text>
      <Text style={styles.full}>{route.params.full}</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  full: {
    fontFamily: 'light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 25,
    color: '#f55151',
  },
});

FullInfo.defaultProps = {
  children: null,
};
