import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <>
//       <StatusBar hidden />
//       <SafeAreaView>
//         <ScrollView style={styles.appContainer}>
//           <Text>ciao</Text>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'left',
            title: 'Set the repository address',
            headerStyle: {
              marginTop: 0,
              borderColor: '#fff',
              borderBottomWidth: 0,
              shadowColor: 'transparent',
              elevation: 0,
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              textAlign: 'left',
              fontWeight: '600',
            },
            headerTintColor: '#000',
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => alert('This is a button!')}>
            //     <Text color="#000">Info</Text>
            //   </TouchableOpacity>
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
