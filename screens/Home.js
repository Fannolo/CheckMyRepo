import React, {useState, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {colors} from '../configs';
import {TouchableText, Button} from '../components';
import {MainTemplate} from '../template';

export function Home({navigation}) {
  const [error, setError] = useState(false);
  const [repository, setRepository] = useState('repo');
  const [user, setUser] = useState('user');
  const [textColor, setTextColor] = useState(colors.grey);
  const [repositoryTextColor, setRepositoryTextColor] = useState(colors.grey);

  const color = error ? colors.salmon : colors.white;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: color,
      },
    });
  });

  return (
    <MainTemplate
      backgroundColor={color}
      buttonText={'CHECK'}
      buttonOnPress={() => {
        //TODO: VALIDATE THE URL
        navigation.navigate('ThankYou');
      }}>
      <View style={{flex: 1}}>
        <Text style={[styles.text]}>github.com</Text>
        <TouchableText
          text={user}
          color={textColor}
          onPress={() => {
            navigation.navigate('User', {
              navigationTitle: 'USER',
              placeholder: 'Type your github username',
              setValue: (value) => {
                setUser(value);
                setTextColor(colors.black);
              },
            });
          }}
        />
        <TouchableText
          text={repository}
          color={repositoryTextColor}
          onPress={() => {
            navigation.navigate('Repository', {
              navigationTitle: 'REPOSITORY',
              placeholder: 'Type your repository name',
              setValue: (value) => {
                setRepository(value);
                setRepositoryTextColor(colors.black);
              },
            });
          }}
        />
      </View>
    </MainTemplate>
  );
}

Home.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.salmon,
  },
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: '600',
  },
});
