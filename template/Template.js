import React from 'react';
import {View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../configs';
import {Button} from '../components';

export function MainTemplate(props) {
  return (
    <SafeAreaView
      style={
        ([styles.container],
        {
          flex: 1,
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : colors.white,
        })
      }>
      <View style={[styles.subContainer]}>
        {props.children}
        <View style={[styles.buttonContainer]}>
          <Button
            text={props.buttonText}
            onPress={() => {
              props.buttonOnPress();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: Dimensions.get('screen').height,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    position: 'absolute',
    right: 15,
    bottom: 0,
  },
});
