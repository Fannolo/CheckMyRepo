import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {MainTemplate} from '../template';

export function ThankYou({navigation}) {
  // Declare a new state variable, which we'll call "count"
  return (
    <MainTemplate
      buttonText={'COOL'}
      buttonOnPress={() => {
        navigation.goBack();
      }}>
      <Text style={styles.thankyou}>{'All done!\nRepository sent.'}</Text>
    </MainTemplate>
  );
}

const styles = StyleSheet.create({
  thankyou: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 100,
    fontFamily: 'OpenSans-Bold',
  },
});
