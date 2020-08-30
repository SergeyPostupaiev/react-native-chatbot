import React, {FunctionComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loader: FunctionComponent = () => {
  return (
    <View>
      <ActivityIndicator color="green" />
    </View>
  );
};
