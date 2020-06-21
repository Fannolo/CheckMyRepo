import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {colors} from '../configs';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function Button(props) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text style={[styles.text]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
  },
});
