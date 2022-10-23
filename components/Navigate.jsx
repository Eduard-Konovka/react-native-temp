import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';
import FullInfo from './FullInfo';
import Contacts from './Contacts';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Главная',
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: 'Статья',
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: 'Контакты',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Navigate.defaultProps = {
  children: null,
};
