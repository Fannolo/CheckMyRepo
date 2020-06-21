import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {colors} from '../configs';

export function Button(props) {
  return (
    <View>
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
    fontWeight: '600',
  },
});
