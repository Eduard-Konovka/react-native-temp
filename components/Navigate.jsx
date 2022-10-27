import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
            headerStyle: {
              backgroundColor: '#f37328',
              height: 100,
            },
            headerTitleStyle: {
              fontWeight: '700',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: 'Статья',
            headerStyle: {
              backgroundColor: '#56ca21',
            },
            headerTitleStyle: {
              fontWeight: '200',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: 'Контакты',
            headerStyle: {
              backgroundColor: '#cea563',
            },
            headerTitleStyle: {
              fontWeight: '200',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Navigate.defaultProps = {
  children: null,
};
