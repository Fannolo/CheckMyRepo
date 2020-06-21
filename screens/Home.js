import React from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {colors} from '../configs';
import {TouchableText, Button} from '../components';

export function Home() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.background]}>
        <Text style={[styles.text]}>github.com</Text>
        <TouchableText text={'user'} onPress={() => {}} />
        <TouchableText text={'repo'} onPress={() => {}} />
      </View>
      <View>
        <Button text={'CHECK'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: '600',
  },
  container: {
    paddingHorizontal: 15,
  },
  background: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 15,
    height: Dimensions.get('screen').height,
  },
});
