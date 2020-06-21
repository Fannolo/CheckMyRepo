import React from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {colors} from '../configs';
import Button from '../components/Button';

export function Home() {
  return (
    <SafeAreaView>
      <View style={[styles.background]}>
        <Text>ciao</Text>
      </View>
      <View>
        <Button text={'CHECK'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    height: Dimensions.get('screen').height,
  },
});
