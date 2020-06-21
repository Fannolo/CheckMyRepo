import React from 'react';
import {View, Text} from 'react-native';
import {MainTemplate} from '../template';

export function InputScreen() {
  return (
    <MainTemplate
      buttonText={'DONE'}
      buttonOnPress={() => {
        alert('ciao');
      }}>
      <View>
        <Text>ciao</Text>
      </View>
    </MainTemplate>
  );
}
