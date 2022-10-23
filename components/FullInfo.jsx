import { View, Text, Button } from 'react-native';
import { globalStyle } from '../styles/style';

export default function FullInfo({ navigation, route }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
}

FullInfo.defaultProps = {
  children: null,
};
