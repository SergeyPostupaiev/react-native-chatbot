import React, {
  useEffect,
  useState,
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
  delay: number | undefined;
  id: number;
  withAvatar: boolean;
}

export const ChatBotMessage: FunctionComponent<ChatBotMessageProps> = ({
  messageText,
  loading,
  messages,
  setState,
  delay,
  id,
  withAvatar,
}) => {
  const [show, toggleShow] = useState(false);

  const disableLoading = useCallback(() => {
    let defaultDisableTime = 750;
    if (delay) {
      defaultDisableTime += delay;
    }
    setTimeout(() => {
      const messageItem = messages.find((item) => item.id === id);

      if (messageItem) {
        messageItem.loading = false;
        messageItem.delay = undefined;

        setState((state: ChatBotState) => ({...state, messages}));
      }
    }, defaultDisableTime);
  }, [id, delay, messages, setState]);

  useEffect(() => {
    disableLoading();
  }, [disableLoading]);

  useEffect(() => {
    if (delay) {
      setTimeout(() => toggleShow(true), delay);
    } else {
      toggleShow(true);
    }
  }, [delay]);

  return (
    <React.Fragment>
      {show && (
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
      )}
    </React.Fragment>
  );
};
