import { StyleSheet, View, TextInput, Button } from 'react-native';
import { globalStyle } from '../styles/style';
import { Formik } from 'formik';

export default function ModalForm({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: '', anonc: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              value={props.values.name}
              onChangeText={props.handleChange('name')}
              placeholder="Введите название статьи"
              style={styles.input}
            />

            <TextInput
              value={props.values.anonc}
              multiline
              onChangeText={props.handleChange('anonc')}
              placeholder="Введите анонс"
              style={styles.input}
            />

            <TextInput
              value={props.values.full}
              multiline
              onChangeText={props.handleChange('full')}
              placeholder="Введите статью"
              style={styles.input}
            />

            <TextInput
              value={props.values.img}
              onChangeText={props.handleChange('img')}
              placeholder="Введите ресурс фото"
              style={[styles.input, styles.lastInput]}
            />

            <Button
              title="Добавить статью"
              color="blue"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
    marginTop: 15,
    padding: 10,
  },
  lastInput: {
    marginBottom: 15,
  },
});

ModalForm.defaultProps = {
  children: null,
};
