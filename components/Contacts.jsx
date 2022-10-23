import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyle } from '../styles/style';

export default function Contacts({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyle.main}>
      <Text style={[globalStyle.title, styles.title]}>Страница про нас</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam
        maxime suscipit eaque explicabo autem odit, qui ad libero deleniti. Eos,
        temporibus asperiores! Maxime facilis distinctio magni molestiae
        consequuntur libero tempora quae esse enim voluptas repellendus veniam
        dicta, exercitationem pariatur sapiente ipsa vero vel quod aut delectus
        aspernatur nihil nesciunt.
      </Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  description: {
    marginBottom: 35,
  },
});

Contacts.defaultProps = {
  children: null,
};
