import { View, Text } from 'react-native';
import { globalStyle } from '../styles/style';
import Loader from '../components/Loader';

export default function Main() {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Главная страница</Text>
      <Loader />
    </View>
  );
}

Main.defaultProps = {
  children: null,
};
