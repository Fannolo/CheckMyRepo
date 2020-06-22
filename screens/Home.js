import React, {useState, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {colors} from '../configs';
import {TouchableText, Button} from '../components';
import {MainTemplate} from '../template';
import Axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const NETWORK_ERROR = 'network_error';
const SERVICE_ERROR = 'service_error';
export function Home({navigation}) {
  const [error, setError] = useState(null);
  const [repository, setRepository] = useState('repo');
  const [user, setUser] = useState('user');
  const [textColor, setTextColor] = useState(colors.grey);
  const [repositoryTextColor, setRepositoryTextColor] = useState(colors.grey);

  const color = error ? colors.salmon : colors.white;

  const BoldText = (props) => (
    <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  );

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
      buttonOnPress={async () => {
        await NetInfo.fetch()
          .then(async ({isConnected}) => {
            if (isConnected) {
              await Axios.get(`https://github.com/${user}/${repository}`)
                .then((res) => {
                  console.log('Success: ', res);
                  //TODO call the pushservice
                  navigation.navigate('ThankYou');
                })
                .catch((error) => {
                  console.log('Error: ', error.response);
                  setError(SERVICE_ERROR);
                });
            } else {
              setError(NETWORK_ERROR);
            }
          })
          .catch((e) => {
            console.log('Netwoork Error ', e);
          });
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
                setError(null);
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
                setError(null);
                setRepositoryTextColor(colors.black);
              },
            });
          }}
        />
        {error === SERVICE_ERROR && (
          <Text style={[styles.errorMessage]}>
            Check your <BoldText>username</BoldText> or your{' '}
            <BoldText>repository</BoldText> name
          </Text>
        )}
        {error === NETWORK_ERROR && (
          <Text style={styles.errorMessage}>
            Check your <BoldText>internet connection</BoldText>
          </Text>
        )}
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
  errorMessage: {
    marginRight: 160,
    fontSize: 20,
    marginTop: 10,
  },
});
