import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {MainTemplate} from '../template';
import {colors} from '../configs';

export function InputScreen({navigation, route}) {
  const [value, onChangeText] = React.useState('');
  return (
    <MainTemplate
      buttonText={'DONE'}
      buttonOnPress={() => {
        navigation.goBack();
      }}>
      <View>
        <TextInput
          placeholder={route.params?.placeholder}
          placeholderTextColor={colors.grey}
          autoCapitalize={'none'}
          allowFontScaling={false}
          autoCompleteType={'off'}
          autoCorrect={false}
          autoFocus={true}
          style={styles.textInput}
          onChangeText={(text) => {
            onChangeText(text);
            route.params?.setValue(text);
          }}
          value={value}
        />
      </View>
    </MainTemplate>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    fontSize: 20,
    borderColor: colors.black,
    borderBottomWidth: 2,
    color: colors.black,
  },
});
