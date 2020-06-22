import React, {useState, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {colors} from '../configs';
import {TouchableText, Button} from '../components';
import {MainTemplate} from '../template';
import Axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const NETWORK_ERROR = 'network_error';
const SERVICE_ERROR = 'service_error';

const initialState = {
  error: null,
  repository: 'repo',
  user: 'user',
  backgroundColor: colors.white,
  textColor: colors.grey,
  repositoryTextColor: colors.grey,
  buttonLabel: 'CHECK',
  isValid: false,
};

export function Home({navigation}) {
  const [
    {
      error,
      repository,
      user,
      backgroundColor,
      textColor,
      repositoryTextColor,
      buttonLabel,
      isValid,
    },
    setState,
  ] = useState(initialState);

  function clearState() {
    setState({...initialState});
  }

  const BoldText = (props) => (
    <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        borderColor: colors.white,
        borderWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
        backgroundColor: backgroundColor,
      },
    });
  });

  return (
    <MainTemplate
      backgroundColor={backgroundColor}
      buttonText={buttonLabel}
      buttonOnPress={async () => {
        if (isValid) {
          await Axios.post(
            'https://pushmore.io/webhook/d3Gm4aEPCuhAUjfbECLLdW41',
            {
              repoUrl: `https://github.com/${user}/${repository}`,
              sender: user,
            },
          )
            .then((res) => {
              if (res.data !== 'OK') {
                setState((prevState) => ({
                  ...prevState,
                  error: NETWORK_ERROR,
                  backgroundColor: colors.salmon,
                }));
              } else {
                console.log('Sending the push: ', res);
                navigation.navigate('ThankYou');
                setTimeout(() => {
                  clearState();
                }, 250);
              }
            })
            .catch((e) => {
              console.log('error sending the push: ', e.response);
              setState((prevState) => ({
                ...prevState,
                error: NETWORK_ERROR,
              }));
            });
        } else {
          await NetInfo.fetch()
            .then(async ({isConnected}) => {
              if (isConnected) {
                await Axios.get(`https://github.com/${user}/${repository}`)
                  .then(async (res) => {
                    setState((prevState) => ({
                      ...prevState,
                      error: null,
                      backgroundColor: colors.green,
                      isValid: true,
                      buttonLabel: 'SEND',
                    }));

                    console.log('Success: ', res);
                  })
                  .catch((error) => {
                    console.log('Error: ', error);

                    setState((prevState) => ({
                      ...prevState,
                      error: SERVICE_ERROR,
                      backgroundColor: colors.salmon,
                    }));
                  });
              } else {
                setState((prevState) => ({
                  ...prevState,
                  error: NETWORK_ERROR,
                  backgroundColor: colors.salmon,
                }));
              }
            })
            .catch((e) => {
              console.log('Netwoork Error ', e);
            });
        }
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
                setState((prevState) => ({
                  ...prevState,
                  user: value,
                  error: null,
                  backgroundColor: colors.white,
                  textColor: colors.black,
                }));
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
                setState((prevState) => ({
                  ...prevState,
                  repository: value,
                  error: null,
                  backgroundColor: colors.white,
                  repositoryTextColor: colors.black,
                }));
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

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontFamily: 'OpenSans-Regular',
  },
  errorMessage: {
    marginRight: 160,
    fontSize: 20,
    marginTop: 10,
  },
});
