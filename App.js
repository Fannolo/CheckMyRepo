import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Home, InputScreen, ThankYou} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from './configs';
import {
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const DEFAULT_OPTIONS = {
  headerTitleAlign: 'left',
  headerStyle: {
    borderColor: colors.white,
    borderWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
    backgroundColor: colors.white,
  },
  headerTitleStyle: {
    textAlign: 'left',
    fontWeight: '600',
  },
  headerTintColor: colors.black,
};

const renderHeaderLeft = (navigation) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image
      resizeMode={'contain'}
      style={{width: 30, height: 20, marginLeft: 15}}
      source={require('./assets/back.png')}
    />
  </TouchableOpacity>
);

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            ...DEFAULT_OPTIONS,
            title: 'Set the repository address',
          })}
        />
        <Stack.Screen
          name="User"
          component={InputScreen}
          options={({route, navigation}) => ({
            ...DEFAULT_OPTIONS,
            title: route.params?.navigationTitle,
            headerLeft: () => renderHeaderLeft(navigation),
          })}
        />
        <Stack.Screen
          name="Repository"
          component={InputScreen}
          options={({route, navigation}) => ({
            ...DEFAULT_OPTIONS,
            title: route.params?.navigationTitle,
            headerLeft: () => renderHeaderLeft(navigation),
          })}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYou}
          options={{...DEFAULT_OPTIONS, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
