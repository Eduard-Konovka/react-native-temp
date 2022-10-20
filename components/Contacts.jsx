import { View, Text } from 'react-native';
import { globalStyle } from '../styles/style';
import Loader from '../components/Loader';

export default function Contacts() {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Страница про нас</Text>
      <Loader />
    </View>
  );
}

Contacts.defaultProps = {
  children: null,
};
