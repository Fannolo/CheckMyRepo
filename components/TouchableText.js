import React from 'react';
import {colors} from '../configs';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export function TouchableText(props) {
  return (
    <View style={[styles.buttonContainer]}>
      <Text style={[styles.text]}>/</Text>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text style={[styles.touchableText]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

TouchableText.defaultProps = {
  onPress: () => {},
  text: '',
};

const styles = StyleSheet.create({
  touchableText: {
    fontSize: 35,
    color: colors.grey,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
  },
});
