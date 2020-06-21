import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export const ThankYou = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};
