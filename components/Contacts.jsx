import { View, Text } from 'react-native';
import { globalStyle } from '../styles/style';

export default function Contacts() {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Страница про нас</Text>
    </View>
  );
}

Contacts.defaultProps = {
  children: null,
};
