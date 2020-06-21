import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
