import { View, Text, Button } from 'react-native';
import { globalStyle } from '../styles/style';

export default function Contacts({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Страница про нас</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
}

Contacts.defaultProps = {
  children: null,
};
