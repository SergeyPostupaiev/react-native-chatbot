import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {defineTime} from './utils';

interface UserChatMessageProps {
  message: string;
  createDate: Date;
}

export const UserChatMessage: FunctionComponent<UserChatMessageProps> = ({
  message,
  createDate,
}) => {
  const time = defineTime(createDate);
  return (
    <View style={styles.chatMessageContainer}>
      <View style={styles.chatMessage}>
        <Text style={styles.chatMessageText}>{message}</Text>
        <Text style={styles.chatMessageTime}>{time}</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text>U</Text>
      </View>
    </View>
  );
};
