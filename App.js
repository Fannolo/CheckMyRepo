import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Home, InputScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from './configs';
import {StatusBar} from 'react-native';

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
  // headerLeft: () => (
  //   <TouchableOpacity onPress={() => alert('This is a button!')}>
  //     <Text color="#000">⃪</Text>
  //   </TouchableOpacity>
  // ),
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{...DEFAULT_OPTIONS, title: 'Set the repository address'}}
        />
        <Stack.Screen
          name="User"
          component={InputScreen}
          options={({route}) => ({
            ...DEFAULT_OPTIONS,
            title: route.params?.navigationTitle,
          })}
        />
        <Stack.Screen
          name="Repository"
          component={InputScreen}
          options={({route}) => ({
            ...DEFAULT_OPTIONS,
            title: route.params?.navigationTitle,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
