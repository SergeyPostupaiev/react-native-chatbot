import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface BotProductListProps {
  products: string[];
}

export const BotProductList: FunctionComponent<BotProductListProps> = ({
  products,
}) => {
  return (
    <View style={styles.widgetContainer}>
      {products.map((item: string, index: number) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};
