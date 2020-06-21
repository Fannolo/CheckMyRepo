import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Home, InputScreen, ThankYou} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from './configs';
import {StatusBar, TouchableOpacity, Image, Text} from 'react-native';

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

const Stack = createStackNavigator();
export default function App() {
  //const back = require('./assets/back@3x.png');
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
          options={({route, navigation}) => ({
            ...DEFAULT_OPTIONS,
            title: route.params?.navigationTitle,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                {/* <Image style={{width: 200, height: 200}} source={back} /> */}
                <Text
                  allowFontScaling={false}
                  fontSize={30}
                  width={20}
                  height={20}>
                  ⃪
                </Text>
              </TouchableOpacity>
            ),
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
        <Stack.Screen
          name="ThankYou"
          component={ThankYou}
          options={{...DEFAULT_OPTIONS, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
