import { View, Text } from 'react-native';
import { globalStyle } from '../styles/style';

export default function Main() {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Главная страница</Text>
    </View>
  );
}

Main.defaultProps = {
  children: null,
};
