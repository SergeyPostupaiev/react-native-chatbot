import React, {
  useEffect,
  useCallback,
  FunctionComponent,
  Dispatch,
} from 'react';
import {View, Text} from 'react-native';
import {ChatbotMessageAvatar} from '../ChatBotMessageAvatar';
import {Loader} from '../Loader';
import {Message, ChatBotState} from '../../../manager/helpers/types';
import {styles} from './styles';

interface ChatBotMessageProps {
  messageText: string;
  loading: boolean;
  messages: Message[];
  setState: Dispatch<any>;
  id: number;
  withAvatar: boolean;
}

export const ChatBotMessage: FunctionComponent<ChatBotMessageProps> = ({
  messageText,
  loading,
  messages,
  setState,
  id,
  withAvatar,
}) => {
  const disableLoading = useCallback(() => {
    let defaultDisableTime = 750;

    setTimeout(() => {
      const messageItem = messages.find((item) => item.id === id);

      if (messageItem) {
        messageItem.loading = false;

        setState((state: ChatBotState) => ({...state, messages}));
      }
    }, defaultDisableTime);
  }, [id, messages, setState]);

  useEffect(() => {
    disableLoading();
  }, [disableLoading]);

  return (
    <View style={styles.messageContainer}>
      {withAvatar && <ChatbotMessageAvatar />}

      <View style={styles.chatBotMessage}>
        {loading ? (
          <Loader />
        ) : (
          <Text style={styles.chatBotMessageText}>{messageText}</Text>
        )}
      </View>
    </View>
  );
};
