import React from 'react';
import {colors} from '../configs';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export function TouchableText(props) {
  return (
    <View style={[styles.buttonContainer]}>
      <Text style={[styles.text]}>/</Text>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'OpenSans-SemiBold',
            color: props.color ? props.color : colors.grey,
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

TouchableText.defaultProps = {
  onPress: () => {},
  text: '',
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 35,
  },
});
