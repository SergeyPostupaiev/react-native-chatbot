import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const BotHelpBar: FunctionComponent = () => {
  return (
    <View style={styles.widgetContainer}>
      <Text>List of available commands or some guide</Text>
    </View>
  );
};
