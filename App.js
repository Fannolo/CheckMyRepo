import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView>
        <ScrollView style={styles.appContainer}>
          <Text>ciao</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
  },
});

export default App;
